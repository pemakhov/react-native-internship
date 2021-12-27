import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import SpaceObjectSummary from './components/SpaceObjectSummary';
import PropTypes from 'prop-types';
import { listTypes } from '../../constants/listTypes';
import withLayout from '../../layouts/withLayout';
import FlatListData from './components/FlatListData';
import SectionListData from './components/SectionListData';
import styles from './styles';

const Home = ({ navigation }) => {
  const listType = useSelector((state) => state.spaceObjects.listType);

  const renderItem = ({ item }) => {
    const { id, name, type, image } = item;

    const handlePress = () =>
      navigation.navigate('Destination', { id, title: name });

    return (
      <SpaceObjectSummary
        data={{
          id,
          name,
          type,
          image: image.small,
        }}
        handlePress={handlePress}
      />
    );
  };

  const memoizedRenderItem = useCallback(renderItem, [renderItem]);

  return (
    <View style={styles.container}>
      {listType === listTypes.FLAT ? (
        <FlatListData renderItem={memoizedRenderItem} />
      ) : (
        <SectionListData renderItem={memoizedRenderItem} />
      )}
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withLayout(Home, 'Solar System Travel Guide');
