import { jokeTypes, EXCERPT_LENGTH } from '../constants/jokeConstants';

/**
 * Extracts the text from the @joke object from different
 * fields depending on the joke.type property
 * @param {object} joke 
 * @returns the joke text
 */
export const getJokeText = (joke) => {
  // There are 'single' and 'twopart' types
  if (joke.type === jokeTypes.single) {
    return joke.joke;
  }

  return `${joke.setup}\n${joke.delivery}`;
};

/**
 * Returns an excerpt from the @text containing @key
 * 
 * @param {string} text 
 * @param {string} key 
 */
export const getExcerpt = (text, key) => {
  const lowerCasedText = text.toLowerCase();
  const lowerCasedKey = key.toLowerCase();
  
  const keyStartIndex = lowerCasedText.indexOf(lowerCasedKey);
  const keyEndIndex = keyStartIndex + key.length - 1;

  const spaceIndices = [...lowerCasedText]
    .map((symbol, i) => ((symbol === ' ') ? i : null))
    .filter((n) => n);

  const excerptStartIndex = spaceIndices
    .filter((n) => n < keyStartIndex)
    .pop() + 1
    || keyStartIndex;

  const excerptEndIndex = spaceIndices
    .filter((n) => n > excerptStartIndex)
    .slice(0, EXCERPT_LENGTH)
    .pop() - 1
    || keyEndIndex;
  
  const phrase = text.slice(excerptStartIndex, excerptEndIndex + 1);
  return `${(excerptStartIndex > 0) ? '...' : ''}
    ${phrase}
    ${(excerptEndIndex < text.length - 1) ? '...' : ''}`;
};

export default getJokeText;
