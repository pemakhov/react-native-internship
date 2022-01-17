import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import { ScrollView, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import withLayout from '../../layouts/withLayout';
import Title from '../../components/Title/Title';
import InfoRow from './components/InfoRow';
import Divider from './components/Divider';
import styles from './styles';

/**
 * Deletes the params that should not be rendered
 * @param {object} data source object
 * @returns new object without deleted properties
 */
const getInfo = (data) => {
  const { id, description, sectionTitle, image, ...info } = data;
  return info;
};

const SpaceObject = ({ route }) => {
  const spaceObjects = useSelector((state) => state.spaceObjects.data);
  const { id, title } = route.params;
  const data = spaceObjects.find((current) => current.id === id);
  const info = getInfo(data);
  const { description } = data;
  const image = data.image.medium;
  const { colors } = useTheme();

  return (
    <ScrollView style={styles.scrollView}>
      <Image source={image} style={styles.image} />
      <View style={styles.container}>
        <Title text={title} />
        {Object.entries(info).map(([key, value]) => (
          <InfoRow infoKey={key} value={value} key={key} />
        ))}
        <Divider />
        <Text style={{ ...styles.description, color: colors.text }}>
          {description}
        </Text>
      </View>
    </ScrollView>
  );
};

SpaceObject.propTypes = {
  route: PropTypes.object,
};

export default withLayout(SpaceObject, 'Destination');
