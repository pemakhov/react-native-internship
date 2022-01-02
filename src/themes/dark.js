import { DarkTheme } from '@react-navigation/native';

export default {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#058ed9',
    background: '#353535',
    placeholder: '#787878',
    negative: {
      background: '#fcfcfc',
      text: '#353535',
    },
    switch: {
      thumb: {
        enabled: '#058ed9',
        disabled: '#787878',
      },
      track: {
        false: '#454545',
        true: '#60c5fb',
      },
    },
    textInput: {
      border: '#60c5fb',
      error: '#ff333a',
    },
  },
};
