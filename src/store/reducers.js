import { combineReducers } from 'redux';
import travelers from './travelers/reducers';
import spaceObjects from './spaceObjects/reducers';

const rootReducer = combineReducers({
  travelers,
  spaceObjects,
});

export default rootReducer;
