import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  touchable: {
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: '#0A0908',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    aspectRatio: 1,
    marginRight: 20,
  },
  title: {
    fontWeight: 'bold',
    color: '#EAE0D5',
  },
  text: {
    color: '#EAE0D5',
  },
});