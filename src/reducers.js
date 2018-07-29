import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
    searchField:''
}

//takes initialState parameters; every action is just an object
export const searchRobots = (state=initialState, action={}) =>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            // we receive an action CHANGE_SEARCH_FIELD, then return new object 
            //that changes the state of searchField
             return Object.assign({}, state, {searchField:action.payload});
        default:
        return state;
    }
}