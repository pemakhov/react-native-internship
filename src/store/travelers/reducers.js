import { UPDATE_TRAVELER, DELETE_TRAVELER } from './types';

const initialState = {
  traveler: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_TRAVELER:
      return { traveler: action.name };
    case DELETE_TRAVELER: {
      return { traveler: null };
    }
    default:
      return state;
  }
}
