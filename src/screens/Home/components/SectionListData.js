import React from 'react';
import { SectionList } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';

const renderSectionHeader = ({ section: { title } }) => (
  <SectionHeader text={title} />
);

function SectionListData({ renderItem }) {
  const data = useSelector((state) => state.spaceObjects.data.sectioned);

  return (
    <SectionList
      sections={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      renderSectionHeader={renderSectionHeader}
      stickySectionHeadersEnabled={true}
    />
  );
}

SectionListData.propTypes = {
  renderItem: PropTypes.func.isRequired,
};

export default SectionListData;
