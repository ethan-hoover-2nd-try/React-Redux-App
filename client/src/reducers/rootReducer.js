import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions'

const initialState = {
    cardList: [],
    isFetching: false,
    error: ''
};

export const rootReducer = (state = initialState, action) => {

    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                cardList: action.payload
            }
        case FETCH_FAILURE: 
            return {
                ...state,
                err: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}