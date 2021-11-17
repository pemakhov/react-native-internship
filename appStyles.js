import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 4,
    paddingHorizontal: 2,
    color: 'black',
  },
  profilePicture: {
    width: 100,
    aspectRatio: 1,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 50,
  },
  textInput: {
    marginVertical: 10,
    height: 50,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#014f86',
    color: 'black',
  }
});
