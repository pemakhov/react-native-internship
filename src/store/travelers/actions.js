import { AsyncStorage } from '@react-native-community/async-storage';
import { DELETE_TRAVELER, SAVE_TRAVELER_TO_STORE } from './types';
import TRAVELER from '../../constants/asyncStorageData';

export const saveTravelerToStore = (name) => ({
  type: SAVE_TRAVELER_TO_STORE,
  name,
});

export const deleteTravelerFromStore = () => ({ type: DELETE_TRAVELER });

const saveTravelerToAsyncStorage = async (traveler) => {
  await AsyncStorage.setItem(TRAVELER, traveler, (error) => {
    if (error) {
      throw error;
    }
    return true;
  });
};

export const retrieveTraveler = () => {
  async (dispatch) => {
    try {
      const value = await AsyncStorage.getItem(TRAVELER);
      dispatch(saveTravelerToStore(value));
      return true;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const updateTraveler = (traveler) => {
  async (dispatch) => {
    try {
      const success = await saveTravelerToAsyncStorage(traveler);
      if (success) {
        return dispatch(saveTravelerToStore(traveler));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteTraveler = () => {
  async (dispatch) => {
    try {
      const success = await saveTravelerToAsyncStorage(null);
      if (success) {
        return dispatch(deleteTravelerFromStore());
      }
    } catch (error) {
      console.error(error);
    }
  };
};
