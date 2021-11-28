import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Title from '../../components/Title/Title';
import styles from './styles';
import withLayout from '../../layouts/withLayout';

const About = () => (
  <View style={styles.container}>
    <Title text="The Solar System Travel Guide" />
    <Text style={styles.text}>
      For those, who want to visit the Solar System
    </Text>
    <Icon name="rocket" size={80} color="red" style={styles.icon} />
  </View>
);

export default withLayout(About, 'About');
