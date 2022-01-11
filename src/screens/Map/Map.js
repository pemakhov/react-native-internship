import React from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from './components/CustomMarker';
import CustomPolygon from './components/CustomPolygon';
import styles from './styles';

function Map() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        mapType="hybrid"
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 48.50780703623439,
          longitude: 32.256674521720676,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <CustomMarker />
        <CustomPolygon />
      </MapView>
    </View>
  );
}

export default Map;
