import React from 'react';
import { ScrollView } from 'react-native';
import SpaceObjectSummary from './components/SpaceObjectSummary/SpaceObjectSummary';
import { spaceObjects } from '../../assets/spaceObjects';
import withLayout from '../../layouts/withLayout';

const Home = () => {
  const spaceBodies = Object.entries(spaceObjects).map((entry) => entry[1]);
  return (
    <ScrollView>
      {spaceBodies.map((spaceObject) => {
        const { id, name, type, image } = spaceObject;
        return (
          <SpaceObjectSummary
            name={name}
            type={type}
            image={image.small}
            key={id}
          />
        );
      })}
    </ScrollView>
  );
};

export default withLayout(Home, 'Solar System Travel Guide');
