import { SET_DATA, SET_LOADED } from './types';
import { spaceObjects } from '../../assets/spaceObjects';

export const setSpaceObjects = (data) => ({ type: SET_DATA, payload: data });

export const setLoaded = (loaded) => ({ type: SET_LOADED, payload: loaded });

export const fetchSpaceObjects = () => (dispatch) => {
  setTimeout(() => {
    dispatch(setSpaceObjects(spaceObjects));
    dispatch(setLoaded(true));
  }, 1000);
};
