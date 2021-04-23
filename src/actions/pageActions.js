import { SELECT,LOADING,HOMEPAGELOADING } from './types'


export const selectPage = (postData) => dispatch => {
    dispatch({
        type: SELECT,
        payload: postData
    })
}
export const setHasLoaded = (postData) => dispatch => {
    console.log("setLoading is " + postData.toString())
    dispatch({
        type: LOADING,
        payload: postData
    })
}

export const homepageLoading = (postData) => dispatch => {
    //console.log("setLoading is " + postData.toString())
    dispatch({
        type: HOMEPAGELOADING,
        payload: postData
    })
}