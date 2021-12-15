import { combineReducers } from 'redux';
import travelers from './travelers/reducers';

const rootReducer = combineReducers({
  travelers,
});

export default rootReducer;
