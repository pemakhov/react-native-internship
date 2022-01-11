import React from 'react';
import { Polygon } from 'react-native-maps';

function CustomPolygon() {
  return (
    <Polygon
      coordinates={[
        {
          latitude: 48.507796374009644,
          longitude: 32.25562309823977,
        },
        {
          latitude: 48.508258395040684,
          longitude: 32.2561166246649,
        },
        {
          latitude: 48.50782480619485,
          longitude: 32.25717341494479,
        },
        {
          latitude: 48.50743919332578,
          longitude: 32.25674157932281,
        },
      ]}
      fillColor="#2a9d8f"
    />
  );
}

export default CustomPolygon;
