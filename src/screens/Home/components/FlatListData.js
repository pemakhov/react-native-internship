import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

function FlatListData({ data, renderItem }) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

FlatListData.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default FlatListData;
