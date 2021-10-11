export const MAX_JOKE_ID = 57;
export const AMOUNT = 10;

export const getUrl = (from, to, amount) => {
  return `https://v2.jokeapi.dev/joke/Programming?idRange=${from}-${to}&amount=${amount}`;
};

export const jokeTypes = {
  single: 'single',
  twoPart: 'twopart',
};
