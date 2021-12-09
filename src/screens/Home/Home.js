import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import SpaceObjectSummary from './components/SpaceObjectSummary/SpaceObjectSummary';
import { spaceObjects } from '../../assets/spaceObjects';
import PropTypes from 'prop-types';
import Title from '../../components/Title/Title';
import withLayout from '../../layouts/withLayout';
import { texts } from '../../constants/texts';

const Home = ({ navigation }) => (
  <ScrollView>
    <Title text={texts.home.title} />
    {spaceObjects.map((spaceObject) => {
      const { id, name, type, image } = spaceObject;
      const memoizedHandlePress = useCallback(
        () => navigation.navigate('Destination', { id, title: name }),
        [id, name]
      );
      return (
        <SpaceObjectSummary
          name={name}
          type={type}
          image={image.small}
          handlePress={memoizedHandlePress}
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
