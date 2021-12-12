import { ADD_TRAVELER, DELETE_TRAVELER, SWITCH_TRAVELER } from './types';

export const addTraveler = (name) => ({ type: ADD_TRAVELER, name });
export const deleteTraveler = (id) => ({ type: DELETE_TRAVELER, id });
export const switchTraveler = (id) => ({ type: SWITCH_TRAVELER, id });
