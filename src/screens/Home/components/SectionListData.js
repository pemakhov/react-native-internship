import React from 'react';
import { SectionList } from 'react-native';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';

const renderSectionHeader = ({ section: { title } }) => (
  <SectionHeader text={title} />
);

function SectionListData({ data, renderItem }) {
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
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default SectionListData;
