import { SET_COLOR_THEME, SET_COLOR_THEME_SOURCE } from './types';
import { colorThemes, colorThemeSources } from '../../constants/colorThemes';

const initialState = {
  colorThemeSource: colorThemeSources.user,
  colorTheme: colorThemes.light,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_COLOR_THEME: {
      return { ...state, colorTheme: action.payload };
    }
    case SET_COLOR_THEME_SOURCE: {
      return { ...state, colorThemeSource: action.payload };
    }
    default:
      return state;
  }
}
