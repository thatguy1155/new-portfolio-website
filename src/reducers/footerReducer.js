import { SELCETEDCONTACT } from '../actions/types'


const initialState = {
    selectedContact:null
}

const footerReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELCETEDCONTACT:
            const newSelectedContact = action.payload
            return{
                ...state,
                selectedContact:newSelectedContact
            }
        
        default:
            return state
    }
}

export default footerReducer