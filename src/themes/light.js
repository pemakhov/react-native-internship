import { DefaultTheme } from '@react-navigation/native';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#33658a',
    background: '#fcfcfc',
    placeholder: '#898989',
    switch: {
      thumb: {
        enabled: '#33658a',
        disabled: '#f4f3f4',
      },
      track: {
        false: '#cdcdcd',
        true: '#55879c',
      },
    },
  },
};
