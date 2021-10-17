import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IDLE, PENDING } from '../../constants/loadingStates';
import {
  MAX_JOKE_INDEX, AMOUNT, getUrl, JOKE_INDEX_KEY, MAX_SEARCHED_JOKES,
} from '../../constants/jokeConstants';
import { getJokeText, saveJokeIndexToLocalStorage } from '../../libs/jokeLib';

/**
 * A thunk action creator
 */
export const fetchAllJokes = createAsyncThunk(
  'jokes/fetchAllJokes',
  async () => {
    const urls = [];
    // The lower limit of the id range
    let from = 0;

    // There is a restriction on the amount of jokes fetched at once
    while (from <= MAX_JOKE_INDEX) {
      const to = from + AMOUNT - 1;
      const url = getUrl(from, to, AMOUNT);
      urls.push(url);
      from += AMOUNT;
    }

    // The array of promises, each one resolving into an array of joke objects
    const dataPromises = urls.map(async (url) => {
      const res = await fetch(url);
      const data = res.json();
      return data;
    });

    const responses = await Promise.allSettled(dataPromises);

    // The array of joke objects
    const jokes = responses.filter((res) => res.status === 'fulfilled' && !res.value.error)
      .map((res) => res.value.jokes)
      .flat();

    return jokes;
  }
);

// The object containing actions and reducer, returned by createSlice
export const jokeCollectionSlice = createSlice({
  name: 'jokeCollection',
  initialState: {
    currentJokeIndex: parseInt(localStorage.getItem(JOKE_INDEX_KEY)) || 0,
    loading: IDLE,
    collection: [],
    searchKey: '',
    searchResults: [],
  },
  reducers: {
    setNextJokeIndex: (state) => {
      const newIndex = state.currentJokeIndex + 1;

      if (newIndex < state.collection.length) {
        saveJokeIndexToLocalStorage(newIndex);
        return { ...state, currentJokeIndex: newIndex };
      }

      return state;
    },

    setPreviousJokeIndex: (state) => {
      const newIndex = state.currentJokeIndex - 1;

      if (newIndex >= 0) {
        saveJokeIndexToLocalStorage(newIndex);
        return { ...state, currentJokeIndex: newIndex };
      }
      
      return state;
    },

    setJokeIndex: (state, action) => {
      const newIndex = action.payload;

      if (newIndex >= 0 && newIndex < state.collection.length && newIndex !== state.collection.currentJokeIndex) {
        saveJokeIndexToLocalStorage(newIndex);
        return { ...state, currentJokeIndex: action.payload };
      }
      
      return state;
    },

    setSearchKey: (state, action) => {
      const key = action.payload;
      const lowerCasedKey = key.toLowerCase();

      if (key.length < 2) return { ...state, searchKey: key, searchResults: [] };

      const filteredResults = state.collection
        .map((joke, index) => [getJokeText(joke), index])
        .filter((joke) => joke[0].toLowerCase().includes(lowerCasedKey))
        .slice(0, MAX_SEARCHED_JOKES);

      return { ...state, searchKey: key, searchResults: filteredResults };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllJokes.pending, (state) => ({ ...state, loading: PENDING }));
    builder.addCase(fetchAllJokes.fulfilled, (state, action) => {
      return { ...state, loading: IDLE, collection: action.payload };
    });
  }
});

export const {
  setNextJokeIndex,
  setPreviousJokeIndex,
  setJokeIndex,
  setSearchKey,
} = jokeCollectionSlice.actions;

export default jokeCollectionSlice.reducer;
