import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, useColorScheme } from 'react-native';
import styles from './styles';

const withLayout = (Component, title) => (props) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Component {...props} />
    </SafeAreaView>
  );
};

export default withLayout;