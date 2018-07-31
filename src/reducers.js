import {
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAIL 
 } from './constants.js';


const initialStateSearch = {
    searchField:''
}

//takes initialState parameters; every action is just an object
export const searchRobots = (state=initialStateSearch, action={}) =>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            // we receive an action CHANGE_SEARCH_FIELD, then return new object 
            //that changes the state of searchField
             return Object.assign({}, state, {searchField:action.payload});
        default:
        return state;
    }
}

//creating a second initial state
const initialStateRobots = {
    isPending:false,
    robots: [],
    error:''
}


//handles the ajax request
export const requestRobots = (state=initialStateRobots, action={})=>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending:true}); // if the request is pending, creates a new state "isPending" and assigns it true
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots:action.payload, isPending:false}) //if request is successful, to robots is assigned the data from request and updates isPending to false since we got the response
        case REQUEST_ROBOTS_FAIL:
            return Object.assign({},state, {error:action.payload, isPending:false});
        default:
        return state; // always return the state if it doesn't match the criteria
    }
}