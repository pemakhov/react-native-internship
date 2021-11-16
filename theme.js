import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#468faf',
    },
    text: {
      fontSize: 20,
      color: 'white',
    },
  },

  main: {
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
  },

  footer: {
    container: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#468faf',
    },
    brand: {
      fontSize: 20,
      color: 'white',
    },
    slogan: {
      fontSize: 14,
      color: 'white',
    },
  },

  paragraph: {
    fontSize: 16,
    color: 'black',
    marginVertical: 5,
  },

  subtitle: {
    fontWeight: 'bold',
  }
});
