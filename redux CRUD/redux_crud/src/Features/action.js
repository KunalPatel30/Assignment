import axios from 'axios';
import * as types from './types';

//view user
const loaduserdata = (data) => ({
    type:types.VIEW_USER,
    payload:data
});

export const selectuser = () => {
    return function(dispatch) {
        axios.get(`http://localhost:3000/user`)
        .then((res)=> {
            dispatch(loaduserdata(res.data));
        })
    }
}


//single user
const singleuser = (data) => ({
    type:types.VIEW_USER,
    payload:data
});

export const singleselectuser = () => {
    return function(dispatch) {
        axios.get(`http://localhost:3000/user`)
        .then((res)=> {
            dispatch(singleuser(res.data));
        })
    }
}


//insert
export const insert = (api,formvalue) => {
    return function() {
        axios.post(api,formvalue);
    }
}


//delete
export const ondelete = (api) => {
    return function() {
        axios.delete(api);
    }
}

//update
export const update = (api,formvalue) => {
    return function() {
        axios.patch(api,formvalue);
    }
}