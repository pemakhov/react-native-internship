import AsyncStorage from '@react-native-async-storage/async-storage';
import { SET_DATA, SET_LIST_TYPE, SET_LOADED } from './types';
import { LIST_TYPE } from '../../constants/asyncStorageData';
import { listTypes } from '../../constants/listTypes';
import { spaceObjects } from '../../assets/spaceObjects';

export const setData = (data) => ({ type: SET_DATA, payload: data });

export const setLoaded = (loaded) => ({ type: SET_LOADED, payload: loaded });

export const setListType = (listType) => ({
  type: SET_LIST_TYPE,
  payload: listType,
});

export const fetchSpaceObjects = () => (dispatch) => {
  setTimeout(() => {
    dispatch(setData(spaceObjects));
    dispatch(setLoaded(true));
  }, 1000);
};

export const toggleListType = (previousListType) => async (dispatch) => {
  try {
    const listType =
      previousListType === listTypes.FLAT ? listTypes.SECTION : listTypes.FLAT;
    dispatch(setListType(listType));
    await AsyncStorage.setItem(LIST_TYPE, listType);
  } catch (error) {
    console.error(error.message);
  }
};

export const retrieveListType = () => async (dispatch) => {
  try {
    const value = (await AsyncStorage.getItem(LIST_TYPE)) || listTypes.FLAT;
    return dispatch(setListType(value));
  } catch (error) {
    console.log(error.message);
  }
};
