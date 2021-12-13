import React from 'react';
import { View } from 'react-native';
import withLayout from '../../layouts/withLayout';
import Title from '../../components/Title/Title';
import Form from './Form/Form';
import styles from './styles';

function LogIn() {
  return (
    <View style={styles.container}>
      <Title text="Sign in" />
      <Form />
    </View>
  );
}

export default withLayout(LogIn);
