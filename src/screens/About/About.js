import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import PropTypes from 'prop-types';
import Title from '../../components/Title/Title';
import styles from './styles';
import withLayout from '../../layouts/withLayout';

const About = ({ navigation }) => (
  <View style={styles.container}>
    <Title text="The Solar System Travel Guide" />
    <Text style={styles.text}>
      For those, who want to visit the Solar System
    </Text>
    <Button onPress={() => navigation.goBack()} title="Go back" />
    <Icon name="rocket" size={80} color="red" style={styles.icon} />
  </View>
);

About.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }),
};

export default withLayout(About, 'About');
