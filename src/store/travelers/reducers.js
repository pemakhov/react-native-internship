import { SAVE_TRAVELER_TO_STORE, DELETE_TRAVELER } from './types';

const initialState = {
  traveler: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_TRAVELER_TO_STORE:
      return { traveler: action.name };
    case DELETE_TRAVELER: {
      return { traveler: null };
    }
    default:
      return state;
  }
}
