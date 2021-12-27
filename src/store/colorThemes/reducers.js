import { SET_COLOR_THEME, SET_DEFINED_BY } from './types';
import { colorThemes, colorThemeDefinedBy } from '../../constants/colorThemes';

const initialState = {
  colorThemeDefinedBy: colorThemeDefinedBy.user,
  colorTheme: colorThemes.light,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_COLOR_THEME: {
      return { colorTheme: action.payload };
    }
    case SET_DEFINED_BY: {
      return { colorThemeDefinedBy: action.payload };
    }
    default:
      return state;
  }
}
