import { Dimensions, StyleSheet } from 'react-native';

const side = Dimensions.get('window').width;

export default StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: 'white',
    color: 'black',
  },
  container: {
    marginHorizontal: 2,
    marginBottom: 20,
  },
  image: {
    width: side,
    height: side,
  },
  description: {
    fontSize: 16,
    color: 'black',
  },
});
