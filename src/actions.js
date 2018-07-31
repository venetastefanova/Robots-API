import {
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAIL 
 } from './constants.js';



export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text //payload =whatever data is needed
});


//action for the ajax call for the robots from the API
export const requestRobots  = (dispatch) => {
    //first dispatches the request
    dispatch({type:REQUEST_ROBOTS_PENDING});
    //making the ajax cal
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>dispatch({type: REQUEST_ROBOTS_SUCCESS, payload:data})) // updates the constant with the data returned from API
    .catch(error=>dispatch({type:REQUEST_ROBOTS_FAIL, payload:error})); // if there is an error it updates the constant with the error
}
   