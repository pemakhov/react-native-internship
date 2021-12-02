import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import PropTypes from 'prop-types';
import Title from '../../components/Title/Title';
import { texts } from '../../constants/texts';
import styles from './styles';
import withLayout from '../../layouts/withLayout';

const About = ({ navigation }) => {
  const { about } = texts;
  return (
    <View style={styles.container}>
      <Title text={about.title} />
      <Text style={styles.text}>{about.content}</Text>
      <Button onPress={() => navigation.goBack()} title={about.buttonText} />
      <Icon name="rocket" size={80} color="red" style={styles.icon} />
    </View>
  );
};

About.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }),
};

export default withLayout(About, 'About');
