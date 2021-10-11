import { configureStore } from '@reduxjs/toolkit';
import jokeCollectionReducer from './pages/jokes/jokeSlice';

export default configureStore({
  reducer: {
    jokes: jokeCollectionReducer,
  },
});
