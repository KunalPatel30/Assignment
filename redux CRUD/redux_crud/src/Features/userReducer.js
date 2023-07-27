import * as types from './types';

const initialstate = {
    alluser:[],
    singleuser:[]
};

const userReducer = (state=initialstate, action) => {
    switch(action.type){
        case types.VIEW_USER:
            return{
                ...state,
                alluser:action.payload
            }
        case types.SVIEW_USER:
            return{
                ...state,
                singleuser:action.payload
            }
        default:
            return state
    }
}

export default userReducer;