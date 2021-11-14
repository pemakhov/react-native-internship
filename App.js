import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';
import Header from './components/Header/Header';
import { TITLE } from './constants/layout';

const App = () => {
  const [name, setName] = useState('')

  return (
  <SafeAreaView>
    <Header title={TITLE} />
    <View>
      <Text>Name: {name}</Text>
    </View>
    <TextInput
      onChangeText={setName}
      value={name}
      style={styles.textInput}
    />
  </SafeAreaView>
)};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
  }
})

export default App;
