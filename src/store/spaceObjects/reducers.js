import { SET_DATA, SET_LOADED, SET_LIST_TYPE } from './types';
import { listTypes } from '../../constants/listTypes';

const initialState = {
  listType: listTypes.FLAT,
  loaded: false,
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADED:
      return { ...state, loaded: action.payload };
    case SET_DATA:
      return { ...state, data: action.payload };
    case SET_LIST_TYPE:
      return { ...state, listType: action.payload };
    default:
      return state;
  }
}
