import { DarkTheme } from '@react-navigation/native';

export default {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#33658a',
    background: '#353535',
    placeholder: '#787878',
    switch: {
      thumb: {
        enabled: '#33658a',
        disabled: '#787878',
      },
      track: {
        false: '#454545',
        true: '#55879c',
      },
    },
  },
};
