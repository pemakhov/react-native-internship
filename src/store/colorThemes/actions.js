import AsyncStorage from '@react-native-async-storage/async-storage';
import { SET_COLOR_THEME, SET_COLOR_THEME_SOURCE } from './types';
import { colorThemes, colorThemeSources } from '../../constants/colorThemes';
import {
  COLOR_THEME,
  COLOR_THEME_SOURCE,
} from '../../constants/asyncStorageData';

export const setColorTheme = (theme) => ({
  type: SET_COLOR_THEME,
  payload: theme,
});

export const setColorThemeSource = (source) => ({
  type: SET_COLOR_THEME_SOURCE,
  payload: source,
});

export const toggleColorTheme = (previousColorTheme) => async (dispatch) => {
  try {
    const colorTheme =
      previousColorTheme === colorThemes.light
        ? colorThemes.dark
        : colorThemes.light;
    dispatch(setColorTheme(colorTheme));
    await AsyncStorage.setItem(COLOR_THEME, colorTheme);
  } catch (error) {
    console.error(error.message);
  }
};

export const toggleColorThemeSource = (previousSource) => async (dispatch) => {
  try {
    const themeSource =
      previousSource === colorThemeSources.user
        ? colorThemeSources.device
        : colorThemeSources.user;
    dispatch(setColorThemeSource(themeSource));
    await AsyncStorage.setItem(COLOR_THEME_SOURCE, themeSource);
  } catch (error) {
    console.error(error.message);
  }
};

export const retrieveColorTheme = () => async (dispatch) => {
  try {
    const value =
      (await AsyncStorage.getItem(COLOR_THEME)) || colorThemes.light;
    return dispatch(setColorTheme(value));
  } catch (error) {
    console.log(error.message);
  }
};

export const retrieveColorThemeSource = () => async (dispatch) => {
  try {
    const value =
      (await AsyncStorage.getItem(COLOR_THEME_SOURCE)) ||
      colorThemeSources.device;
    return dispatch(setColorThemeSource(value));
  } catch (error) {
    console.log(error.message);
  }
};
