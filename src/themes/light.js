import { DefaultTheme } from '@react-navigation/native';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#e07a5f',
    background: '#fcfcfc',
    switch: {
      thumb: {
        enabled: '#e07a5f',
        disabled: '#f4f3f4',
      },
      track: {
        false: '#dedede',
        true: '#f9dcc4',
      },
    },
  },
};
