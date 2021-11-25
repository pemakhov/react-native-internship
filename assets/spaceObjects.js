export const spaceObjects = [
  {
    id: 0,
    type: 'star',
    name: 'Sun',
    climate: 'hot',
    population: 0,
    description: `The Sun is the star in the center of the Solar System. 
      It produces a lot of energy from the hydrogen it consists of, 
      using the process named nuclear fusion. The surface and atmosphere 
      of the Sun is very hot, therefore your visit to this space body 
      can be a problem.
      The Sun is the star in the center of the Solar System. 
      It produces a lot of energy from the hydrogen it consists of, 
      using the process named nuclear fusion. The surface and atmosphere 
      of the Sun is very hot, therefore your visit to this space body 
      can be a problem.
      `,
    image: {
      small: require('./images/sun_small.jpg'),
      medium: require('./images/sun_medium.jpg'),
      large: require('./images/sun_large.jpg'),
    },
  },
  {
    id: 1,
    type: 'planet',
    name: 'Mercury',
    climate: 'very cold at night and very hot at day',
    population: 0,
    description: `Mercury is the smallest planet of the Solar System. The climate is 
      awful, but the view of the Sun is the best in the whole Solar System. Very short years 
      and very long days can spoil your sleep schedule.`,
    image: {
      small: require('./images/mercury_small.jpg'),
      medium: require('./images/mercury_medium.jpg'),
      large: require('./images/mercury_large.jpg'),
    },
  },
  {
    id: 2,
    type: 'planet',
    name: 'Venus',
    climate: 'hot, wet, and windy',
    population: 0,
    description: `Venus is a rocky planet. It's climate is badly spoiled by a global warmth. 
    Even if your spacesuit is strong enough to endure high pressure, temperature, 
    acids and heavy wind, sightseeing is problematic because of poor visibility. One of a 
    few famous objects about this place is the wrack of Soviet spacecraft.`,
    image: {
      small: require('./images/venus_small.jpg'),
      medium: require('./images/venus_medium.jpg'),
      large: require('./images/venus_large.jpg'),
    },
  },
  {
    id: 3,
    type: 'planet',
    name: 'Earth',
    climate: 'ideal',
    population: 7800000000,
    description: `The only planet in the Solar System, inhabited by the living creatures. 
    The whole planet is a conservation area, therefore your visit should be thoroughly concealed from 
    the locals. Taking souvenirs is severely forbidden. Despite inconveniences, this planet 
    is worth visiting. Diverse landscapes, climate, and organic life. Cities and constructions, 
    oceans and mountains, won't leave you unimpressed.`,
    image: {
      small: require('./images/earth_small.jpg'),
      medium: require('./images/earth_medium.jpg'),
      large: require('./images/earth_large.jpg'),
    },
  },
  {
    id: 4,
    type: 'planet',
    name: 'Mars',
    climate: 'cold, dust storms',
    population: 0,
    description: `The planet is not very big, but here you can find the highest mountain in 
    the whole Solar System - the Olympus Mons. Also, you can meet here a dozen of vehicles sent 
    by earthlings.`,
    image: {
      small: require('./images/mars_small.jpg'),
      medium: require('./images/mars_medium.jpg'),
      large: require('./images/mars_large.jpg'),
    },
  },
  {
    id: 5,
    type: 'planet',
    name: 'Jupiter',
    climate: 'stormy',
    population: 0,
    description: `The planet is the biggest in the whole Solar System. It is best known for 
    its big spot: the storm existing many hundreds of years.`,
    image: {
      small: require('./images/jupiter_small.jpg'),
      medium: require('./images/jupiter_medium.jpg'),
      large: require('./images/jupiter_large.jpg'),
    },
  },
];
