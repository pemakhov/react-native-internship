import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    container: {
      alignItems: 'center',
      backgroundColor: 'indigo',
      paddingVertical: 20,
    },
    text: {
      fontSize: 20,
      color: 'cornsilk',
    },
  },
  content: {
    paddingHorizontal: 2,
    color: 'black',
  },
  contentText: {
    fontSize: 16,
    color: 'black',
  },
  image: {
    width: 100,
    aspectRatio: 1,
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 50,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
  }
});
