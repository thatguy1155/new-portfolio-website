import { combineReducers } from 'redux'
import pageReducer from './pageReducer'
import slideshowReducer from './slideshowReducer'
import footerReducer from './footerReducer'


//this is how you send all the reducers back to the store
export default combineReducers({
    page: pageReducer,
    slideshow: slideshowReducer,
    footer: footerReducer
})