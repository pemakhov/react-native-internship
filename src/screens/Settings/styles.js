import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  item: StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#aaa',
    },
    text: {
      color: 'black',
    },
  }),
});
