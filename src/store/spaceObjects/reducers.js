import { SET_DATA, SET_LOADED, TOGGLE_LIST_TYPE } from './types';
import { listTypes } from '../../constants/listTypes';

const initialState = {
  listType: listTypes.FLAT,
  loaded: false,
  data: [],
  sectionData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADED:
      return { ...state, loaded: action.payload };
    case SET_DATA:
      return { ...state, data: action.payload };
    case TOGGLE_LIST_TYPE:
      const listType =
        state.listType === listTypes.FLAT ? listTypes.SECTION : listTypes.FLAT;
      return { ...state, data: action.payload, listType };
    default:
      return state;
  }
}
