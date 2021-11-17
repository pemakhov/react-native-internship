import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './resumeItemStyles';

const { paragraph, subtitle } = styles;

const ResumeItem = ({ title, value }) => (
  <Text style={paragraph}>
    <Text style={subtitle}>
      {`${title}: `}
    </Text>
    {value}
  </Text>
);

ResumeItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ResumeItem;
