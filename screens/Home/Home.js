import React from 'react';
import { ScrollView } from 'react-native';
import SpaceObjectSummary from './components/SpaceObjectSummary/SpaceObjectSummary';
import { spaceObjects } from '../../assets/spaceObjects';
import PropTypes from 'prop-types';
import withLayout from '../../layouts/withLayout';

const Home = ({ navigation }) => (
  <ScrollView>
    {spaceObjects.map((spaceObject) => {
      const { id, name, type, image } = spaceObject;
      return (
        <SpaceObjectSummary
          name={name}
          type={type}
          image={image.small}
          handlePress={() => navigation.navigate('Destination', { id })}
          key={id}
        />
      );
    })}
  </ScrollView>
);

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withLayout(Home, 'Solar System Travel Guide');
