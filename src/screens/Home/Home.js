import React, { useMemo, useCallback } from 'react';
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
  const { listType, data } = useSelector((state) => state.spaceObjects);

  const getSectionedData = (flatData) =>
    flatData.reduce((acc, item) => {
      const section = acc.find(
        (element) => element?.title === item.sectionTitle
      );

      if (!section) {
        acc.push({ title: item.sectionTitle, data: [item] });
        return acc;
      }

      section.data.push(item);
      return acc;
    }, []);

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

  const memoizedSectionedData = useMemo(() => getSectionedData(data), [data]);
  const memoizedRenderItem = useCallback(renderItem, [renderItem]);

  return (
    <View style={styles.container}>
      {listType === listTypes.FLAT ? (
        <FlatListData data={data} renderItem={memoizedRenderItem} />
      ) : (
        <SectionListData
          data={memoizedSectionedData}
          renderItem={memoizedRenderItem}
        />
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
