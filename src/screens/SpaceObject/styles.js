import { Dimensions, StyleSheet } from 'react-native';

const side = Dimensions.get('window').width;

export default StyleSheet.create({
  scrollView: {
    flexGrow: 1,
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
  },
  divider: {
    marginVertical: 15,
    marginHorizontal: 50,
    borderBottomWidth: 1,
  },
  infoRowContainer: {
    marginVertical: 2,
  },
});
