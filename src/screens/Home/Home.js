import React, { useMemo } from 'react';
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

  const getSectionedData = (flatData) => {
    const sections = flatData.reduce(
      (acc, item) => ({
        ...acc,
        [item.sectionTitle]: [...(acc?.[item.sectionTitle] || []), item],
      }),
      {}
    );

    return Object.entries(sections).map(([title, sectionData]) => ({
      title,
      data: sectionData,
    }));
  };

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

  return (
    <View style={styles.container}>
      {listType === listTypes.FLAT ? (
        <FlatListData data={data} renderItem={renderItem} />
      ) : (
        <SectionListData data={memoizedSectionedData} renderItem={renderItem} />
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
