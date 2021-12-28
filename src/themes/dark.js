import { DarkTheme } from '@react-navigation/native';

export default {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#e07a5f',
    background: '#353535',
    switch: {
      thumb: {
        enabled: '#e07a5f',
        disabled: '#787878',
      },
      track: {
        false: '#565656',
        true: '#f9dcc4',
      },
    },
  },
};
