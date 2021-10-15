import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IDLE, PENDING } from '../../constants/loadingStates';
import {
  MAX_JOKE_ID, AMOUNT, getUrl, JOKE_ID_KEY, MAX_SEARCHED_JOKES,
} from '../../constants/jokeConstants';
import { getJokeText } from '../../libs/jokeLib';

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
    while (from <= MAX_JOKE_ID) {
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

const saveJokeIdToLocalStorage = (id) => localStorage.setItem(JOKE_ID_KEY, id);

// The object containing actions and reducer, returned by createSlice
export const jokeCollectionSlice = createSlice({
  name: 'jokeCollection',
  initialState: {
    currentJokeId: localStorage.getItem(JOKE_ID_KEY) || 0,
    loading: IDLE,
    collection: [],
    searchKey: '',
    searchResults: [],
  },
  reducers: {
    setNextJokeId: (state) => {
      const newId = state.currentJokeId + 1;

      if (newId < state.collection.length) {
        saveJokeIdToLocalStorage(newId);
        return { ...state, currentJokeId: newId };
      }

      return state;
    },

    setPreviousJokeId: (state) => {
      const newId = state.currentJokeId - 1;

      if (newId > 0) {
        saveJokeIdToLocalStorage(newId);
        return { ...state, currentJokeId: newId };
      }
      
      return state;
    },

    setJokeId: (state, action) => {
      const newId = action.payload;

      if (newId >= 0 && newId < state.collection.length && newId !== state.collection.currentJokeId) {
        saveJokeIdToLocalStorage(newId);
        return { ...state, currentJokeId: action.payload };
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
  setNextJokeId,
  setPreviousJokeId,
  setJokeId,
  setSearchKey,
} = jokeCollectionSlice.actions;

export default jokeCollectionSlice.reducer;
