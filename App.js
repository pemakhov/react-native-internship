import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import Header from './components/Header/Header';
import { TITLE } from './constants/layout';
import styles from './AppStyles';

const App = () => {
  const [name, setName] = useState('');

  return (
    <SafeAreaView>
      <Header
        title={TITLE}
        styles={styles.header}
      />
      <Image
        style={styles.image}
        source={{ uri: 'https://randomuser.me/api/portraits/men/9.jpg' }}
      />
      <View style={styles.content}>
        <Text style={styles.contentText}>
          Name:
          {' '}
          {name}
        </Text>
        <TextInput
          onChangeText={setName}
          value={name}
          style={styles.textInput}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
