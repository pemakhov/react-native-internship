import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IDLE, PENDING } from '../../constants/loadingStates';
import { MAX_JOKE_ID, AMOUNT, getUrl } from '../../constants/jokesApiInfo';

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

    // The array promises, each one resolving into an array of joke objects
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
    currentJokeId: 0,
    loading: IDLE,
    collection: [],
  },
  reducers: {
    setNextJokeId: (state) => {
      const newId = state.currentJokeId + 1;
      return (newId < state.collection.length)
        ? ({ ...state, currentJokeId: newId })
        : state;
    },
    setPreviousJokeId: (state) => {
      const newId = state.currentJokeId - 1;
      return (newId > 0)
        ? ({ ...state, currentJokeId: newId })
        : state;
    },
    setJokeId: (state, action) => {
      const newId = action.payload;
      return (newId >= 0 && newId < state.collection.length)
        ? ({ ...state, currentJokeId: action.payload })
        : state;
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
} = jokeCollectionSlice.actions;

export default jokeCollectionSlice.reducer;
