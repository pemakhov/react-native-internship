import React from 'react';
import { View, TextInput } from 'react-native';
import withLayout from '../../layouts/withLayout';
import Title from '../../components/Title/Title';
import styles from './styles';

function LogIn() {
  return (
    <View style={styles.container}>
      <Title text="Sign in" />
      <View style={styles.textInput}>
        <TextInput placeholder="name" />
      </View>
    </View>
  );
}

export default withLayout(LogIn);
