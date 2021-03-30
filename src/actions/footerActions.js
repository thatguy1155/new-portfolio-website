import { SELCETEDCONTACT } from './types'


export const selectContact = (postData) => dispatch => {
    dispatch({
        type: SELCETEDCONTACT,
        payload: postData
    })
}
