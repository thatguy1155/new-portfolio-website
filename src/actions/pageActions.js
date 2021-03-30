import { SELECT,LOADING,HOMEPAGELOADING } from './types'
import axios from 'axios'


export const selectPage = (postData) => dispatch => {
    dispatch({
        type: SELECT,
        payload: postData
    })
}
export const setLoading = (postData) => dispatch => {
    console.log("setLoading is " + postData.toString())
    dispatch({
        type: LOADING,
        payload: postData
    })
}
export const homepageLoading = (postData) => dispatch => {
    console.log("setLoading is " + postData.toString())
    dispatch({
        type: HOMEPAGELOADING,
        payload: postData
    })
}