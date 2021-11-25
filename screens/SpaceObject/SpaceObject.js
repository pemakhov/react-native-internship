import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { spaceObjects } from '../../assets/spaceObjects';
import withLayout from '../../layouts/withLayout';
import styles from './styles';

const SpaceObject = ({ id }) => {
  const data = spaceObjects.find((current) => current.id === id);
  const { type, name, climate, population, description } = data;
  const image = data.image.medium;
  return (
    <ScrollView style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text>
        Type: <Text>{type}</Text>
      </Text>
      <Text>
        Name: <Text>{name}</Text>
      </Text>
      <Text>
        Climate: <Text>{climate}</Text>
      </Text>
      <Text>
        Population: <Text>{population}</Text>
      </Text>
      <Text>
        Description: <Text>{description}</Text>
      </Text>
    </ScrollView>
  );
};

SpaceObject.propTypes = {
  id: PropTypes.number,
};

export default withLayout(SpaceObject, 'Destination');
