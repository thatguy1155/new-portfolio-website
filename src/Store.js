import { createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'  //because the file in reducers is called index.js in can be called here as Root Reducer

const initialState = {};

const middleware = [thunk]

const Store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        //the following line allows our redux stuff to be viewable by the redux devtools
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ))

export default Store