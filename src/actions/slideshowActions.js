import { SETINDEX,SETNEWINDEX,SETPROJECTVIEW } from './types'
import axios from 'axios'


export const setIndex = (postData) => dispatch => {
    dispatch({
        type: SETINDEX,
        payload: postData
    })
}
export const setNewIndex = (postData) => dispatch => {
    
    dispatch({
        type: SETNEWINDEX,
        payload: postData
    })
}
export const setProjectView = (postData) => dispatch => {
    dispatch({
        type: SETPROJECTVIEW,
        payload: postData
    })
}