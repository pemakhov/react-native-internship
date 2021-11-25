import { Dimensions, StyleSheet } from 'react-native';

const side = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  image: {
    width: side,
    height: side,
  },
});
