import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  touchable: {
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: '#000',
  },
  spaceObjectSummary: StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: 80,
      aspectRatio: 1,
      marginRight: 20,
      borderRadius: 10,
    },
    title: {
      fontWeight: 'bold',
      color: '#EAE0D5',
    },
    text: {
      color: '#EAE0D5',
    },
  }),
  sectionList: StyleSheet.create({
    headerContainer: {
      paddingVertical: 5,
    },
    headerText: {
      fontSize: 18,
    },
  }),
});
