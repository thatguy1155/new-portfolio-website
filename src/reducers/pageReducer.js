import { SELECT, LOADING, HOMEPAGELOADING } from '../actions/types';

const initialState = {
  selectedPage: 'home',
  homepageLoading: {
    panel1: false,
    panel2: false,
  },
  hasLoaded: false,

};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT: {
      const newSelectedPage = action.payload;
      return {
        ...state,
        selectedPage: newSelectedPage,
      };
    }
    case LOADING: {
      const loadedResult = action.payload;
      return {
        ...state,
        hasLoaded: loadedResult,
      };
    }
    case HOMEPAGELOADING: {
      const homepageLoaded = action.payload;
      const newhLoading = state.homepageLoading;
      newhLoading[homepageLoaded] = true;
      const newLoading = !!(newhLoading.panel1 && newhLoading.panel2);
      return {
        ...state,
        homepageLoading: newhLoading,
        hasLoaded: newLoading,
      };
    }
    default:
      return state;
  }
};

export default pageReducer;
