import { SET_DATA, SET_LOADED, SET_LIST_TYPE } from './types';
import { listTypes } from '../../constants/listTypes';

const initialState = {
  listType: listTypes.FLAT,
  loaded: false,
  data: {
    flat: [],
    sectioned: [],
  },
};

const getSectionedData = (flatData) => {
  return flatData.reduce((acc, item) => {
    const section = acc.find((element) => element?.title === item.sectionTitle);

    if (!section) {
      acc.push({ title: item.sectionTitle, data: [item] });
      return acc;
    }

    section.data.push(item);
    return acc;
  }, []);
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADED:
      return { ...state, loaded: action.payload };
    case SET_DATA:
      const flat = action.payload;
      const sectioned = getSectionedData(flat);
      return { ...state, data: { flat, sectioned } };
    case SET_LIST_TYPE:
      return { ...state, listType: action.payload };
    default:
      return state;
  }
}
