import { combineReducers } from 'redux';
import travelers from './travelers/reducers';
import spaceObjects from './spaceObjects/reducers';
import colorThemes from './colorThemes/reducers';

const rootReducer = combineReducers({
  travelers,
  spaceObjects,
  colorThemes,
});

export default rootReducer;
