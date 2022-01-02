import { DefaultTheme } from '@react-navigation/native';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#058ed9',
    background: '#fcfcfc',
    placeholder: '#898989',
    negative: {
      background: '#353535',
      text: '#fcfcfc',
    },
    switch: {
      thumb: {
        enabled: '#058ed9',
        disabled: '#f4f3f4',
      },
      track: {
        false: '#cdcdcd',
        true: '#60c5fb',
      },
    },
    textInput: {
      border: '#223e4b',
      error: '#f50008',
    },
  },
};
