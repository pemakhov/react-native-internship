import { SAVE_TRAVELER_TO_STORE, DELETE_TRAVELER } from './types';

const initialState = {
  traveler: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_TRAVELER_TO_STORE:
      // deleted traveler in AsyncStorage is "", but in state it should be null
      return { traveler: action.name || null };
    case DELETE_TRAVELER: {
      return { traveler: null };
    }
    default:
      return state;
  }
}
