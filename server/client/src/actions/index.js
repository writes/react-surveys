import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
    // dispatch action once request is completed
    return function(dispatch) {
        axios.get('/api/current_user')
        // wait for response from api and then dipatch action
        .then(res => dispatch(({ type: FETCH_USER, payload: res })));
    };
};