import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function FlatListData({ renderItem }) {
  const data = useSelector((state) => state.spaceObjects.data.flat);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

FlatListData.propTypes = {
  renderItem: PropTypes.func.isRequired,
};

export default FlatListData;
