import React from 'react';
import { Marker } from 'react-native-maps';

function CustomMarker() {
  return (
    <Marker
      title="Galactic Traveler Center"
      pinColor="indigo"
      coordinate={{
        latitude: 48.50780703623439,
        longitude: 32.256674521720676,
      }}
    />
  );
}

export default CustomMarker;
