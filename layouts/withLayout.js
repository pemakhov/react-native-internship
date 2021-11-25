import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';
import TitleBar from '../components/TitleBar/TitleBar';
import styles from './styles';

const withLayout = (Component, title) => (props) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <TitleBar title={title} />
        <Component {...props} />
      </View>
    </SafeAreaView>
  );
};

export default withLayout;
