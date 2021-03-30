import { SELECT,LOADING,HOMEPAGELOADING } from '../actions/types'


const initialState = {
    selectedPage:'home',
    homepageLoading:{
        panel1:false,
        panel2:false
    },
    hasLoaded:false
    
}

const pageReducer = (state = initialState, action) => {
    //when you get an action, evaluate which kind of action it is
    switch(action.type) {
        //if you get the action type of FETCH_USERS, return the state with the items from there
        case SELECT:
            const newSelectedPage = action.payload
            return{
                ...state,
                selectedPage:newSelectedPage
            }
        case LOADING:
            const loadedResult = action.payload
            return{
                ...state,
                hasLoaded:loadedResult
            }
        
        case HOMEPAGELOADING:
            const homepageLoaded = action.payload
            const newhLoading = state.homepageLoading
            newhLoading[homepageLoaded]=true
            const newLoading = newhLoading.panel1 && newhLoading.panel2 ? true : false
            return{
                ...state,
                homepageLoading:newhLoading,
                hasLoaded:newLoading
            }
        
        default:
            return state
    }
}

export default pageReducer