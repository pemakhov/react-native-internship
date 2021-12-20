import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, SectionList, View, Text } from 'react-native';
import SpaceObjectSummary from './components/SpaceObjectSummary';
import PropTypes from 'prop-types';
import { listTypes } from '../../constants/listTypes';
import withLayout from '../../layouts/withLayout';
import Title from '../../components/Title/Title';
import { texts } from '../../constants/texts';

const Home = ({ navigation }) => {
  const listType = useSelector((state) => state.spaceObjects.listType);
  const flatListData = useSelector((state) => state.spaceObjects.data);

  const getSectionListData = (flatData) =>
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

  const data =
    listType === listTypes.FLAT
      ? flatListData
      : getSectionListData(flatListData);

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

  const renderSectionHeader = ({ section: { title } }) => <Text>{title}</Text>;

  return (
    <View>
      <Title text={texts.home.title} />
      {listType === listTypes.FLAT ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <SectionList
          sections={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          renderSectionHeader={renderSectionHeader}
          stickySectionHeadersEnabled={true}
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
