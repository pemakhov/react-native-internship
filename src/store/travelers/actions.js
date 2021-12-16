import AsyncStorage from '@react-native-async-storage/async-storage';
import { DELETE_TRAVELER, SAVE_TRAVELER_TO_STORE } from './types';
import { TRAVELER } from '../../constants/asyncStorageData';

export const saveTravelerToStore = (name) => ({
  type: SAVE_TRAVELER_TO_STORE,
  name,
});

export const deleteTravelerFromStore = () => ({ type: DELETE_TRAVELER });

const saveTravelerToAsyncStorage = async (traveler) => {
  await AsyncStorage.setItem(TRAVELER, traveler);
};

export const retrieveTraveler = () => async (dispatch) => {
  try {
    const value = await AsyncStorage.getItem(TRAVELER);
    return dispatch(saveTravelerToStore(value));
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTraveler = (traveler) => async (dispatch) => {
  try {
    await saveTravelerToAsyncStorage(traveler);
    return dispatch(saveTravelerToStore(traveler));
  } catch (error) {
    console.error(error);
  }
};

export const deleteTraveler = () => async (dispatch) => {
  try {
    await saveTravelerToAsyncStorage('');
    return dispatch(deleteTravelerFromStore());
  } catch (error) {
    console.error(error);
  }
};
