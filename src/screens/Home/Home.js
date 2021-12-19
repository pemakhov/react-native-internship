import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, View } from 'react-native';
import SpaceObjectSummary from './components/SpaceObjectSummary';
import PropTypes from 'prop-types';
import withLayout from '../../layouts/withLayout';
import Title from '../../components/Title/Title';
import { texts } from '../../constants/texts';

const Home = ({ navigation }) => {
  const spaceObjects = useSelector((state) => state.spaceObjects.data);

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

  return (
    <View>
      <Title text={texts.home.title} />
      <FlatList
        data={spaceObjects}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withLayout(Home, 'Solar System Travel Guide');
