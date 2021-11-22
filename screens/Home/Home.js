import React from 'react';
import { View } from 'react-native';
import SpaceObjectSummary from './components/SpaceObjectSummary';
import { spaceObjects } from '../../assets/spaceObjects';

const Home = () => {
  const spaceBodies = Object.entries(spaceObjects).map((entry) => entry[1]);
  return (
    <View>
      {spaceBodies.map((spaceObject) => {
        const { name, type, id } = spaceObject;
        return <SpaceObjectSummary name={name} type={type} key={id} />;
      })}
    </View>
  );
};

export default Home;
