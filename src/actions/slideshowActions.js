import {
  SETINDEX, SETNEWINDEX, SETPROJECTVIEW, IMAGELOADED,
} from './types';

export const setIndex = (postData) => (dispatch) => {
  dispatch({
    type: SETINDEX,
    payload: postData,
  });
};
export const setNewIndex = (postData) => (dispatch) => {
  dispatch({
    type: SETNEWINDEX,
    payload: postData,
  });
};

export const setProjectView = (postData) => (dispatch) => {
  dispatch({
    type: SETPROJECTVIEW,
    payload: postData,
  });
};

export const imageLoaded = (postData) => (dispatch) => {
  dispatch({
    type: IMAGELOADED,
    payload: postData,
  });
};
