import axios from 'axios';
import { FETCH_USER } from './types';

<<<<<<< HEAD
export const fetchUser = () => {
    // dispatch action once request is completed
    return function(dispatch) {
        axios
        .get('/api/current_user')
        // wait for response from api and then dipatch action
        .then(res => dispatch({ type: FETCH_USER, payload: res }));
    };
};
=======

// async on function that contains a promise
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    // wait for response and dispatch action
    dispatch({ type: FETCH_USER, payload: res }); 
};

>>>>>>> a3670cd58de10aa4f4b2e72093818ef02bdf896d
