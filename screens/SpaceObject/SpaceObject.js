import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { spaceObjects } from '../../assets/spaceObjects';
import withLayout from '../../layouts/withLayout';
import Title from '../../components/Title/Title';
import InfoRow from './components/InfoRow/InfoRow';
import Divider from './components/Divider/Divider';
import styles from './styles';

/**
 * Deletes the 'id', 'description' and 'image properties and returns a new object
 * @param {object} data source object
 * @returns new object with deleted properties
 */
const getInfo = (data) => {
  const { id, description, image, ...info } = data;
  return info;
};

const SpaceObject = ({ route }) => {
  const { id, title } = route.params;
  const data = spaceObjects.find((current) => current.id === id);
  const info = getInfo(data);
  const { description } = data;
  const image = data.image.medium;
  return (
    <ScrollView style={styles.scrollView}>
      <Image source={image} style={styles.image} />
      <View style={styles.container}>
        <Title text={title} />
        {Object.entries(info).map((item) => (
          <InfoRow infoKey={item[0]} value={item[1]} key={item[0]} />
        ))}
        <Divider />
        <Text style={styles.description}>{description}</Text>
      </View>
    </ScrollView>
  );
};

SpaceObject.propTypes = {
  route: PropTypes.object,
};

export default withLayout(SpaceObject, 'Destination');
