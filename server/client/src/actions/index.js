import axios from 'axios';
import { FETCH_USER } from './types';

// async on function that contains a promise
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    // wait for response and dispatch action

    dispatch({ type: FETCH_USER, payload: res.data }); 
};
