import { SET_DATA, SET_LOADED } from './types';

const initialState = {
  loaded: false,
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADED:
      return { ...state, loaded: action.payload };
    case SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
