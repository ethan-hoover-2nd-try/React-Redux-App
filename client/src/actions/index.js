import axios from 'axios'

export const START_FETCHING = 'START_FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const fetchCards = () => dispatch => {
    dispatch({ type: START_FETCHING });

    axios.get('https://api.scryfall.com/cards').then(res => 
    dispatch({
        type: FETCH_SUCCESS, payload: res.data.data
    }, console.log(res.data, "this is from actions"))).catch(err => dispatch({
        type: FETCH_FAILURE, PAYLOAD: err.response
    }));
};