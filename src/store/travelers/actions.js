import { UPDATE_TRAVELER, DELETE_TRAVELER } from './types';

export const updateTraveler = (name) => ({ type: UPDATE_TRAVELER, name });
export const deleteTraveler = ({ type: DELETE_TRAVELER });
