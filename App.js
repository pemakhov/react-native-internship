import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';
import Header from './components/Header/Header';
import { TITLE } from './constants/layout';

const App = () => {
  const [name, setName] = useState('');

  return (
    <SafeAreaView>
      <Header
        title={TITLE}
        style={styles.header}
      />
      <View style={styles.content}>
        <Text>Name: {name}</Text>
        <TextInput
          onChangeText={setName}
          value={name}
          style={styles.textInput}
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  header: {
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'maroon',
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
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
  }
});

export default App;
