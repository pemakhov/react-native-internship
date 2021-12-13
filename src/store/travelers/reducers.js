import { ADD_TRAVELER, DELETE_TRAVELER, SWITCH_TRAVELER } from './types';

const initialState = {
  currentTraveler: null,
  travelers: [],
};

const getId = (word) => `${Date.now()}${word}`;
const createTraveler = (name) => ({ id: getId(name), name });

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TRAVELER:
      return {
        ...state,
        travelers: [...state.travelers, createTraveler(action.name)],
      };
    case DELETE_TRAVELER: {
      return {
        ...state,
        travelers: state.travelers.filter((x) => x.id !== action.id),
      };
    }
    case SWITCH_TRAVELER:
      return {
        ...state,
        currentTraveler: action.id,
      };
    default:
      return state;
  }
}
