import { SET_FIELD, SERIE_SAVED_SUCCESS } from '../actions'

const INITIAL_STATE = {
    id: null, title: '', gender: 'scienceFiction', 
    rate: 0, img: '', description: ''
}

export default serieFormReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SET_FIELD:
            return {...state, [action.field]: action.value}
        case SERIE_SAVED_SUCCESS:
            return INITIAL_STATE
        default:
            return state
    }
}