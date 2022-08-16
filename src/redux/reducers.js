import {combineReducers} from 'redux';

const hello = (state = null) => state
const cars = (state = []) => state
const user = (state = null) => state
const poop = (state = null) => state

export default combineReducers({hello, cars, user, poop})


// !Rules
//* all properties on state have a reducer!!!
//* all reducers get exported in the combineReducers object
//* all reducers must return state, they cannot return undefined
        //we use default parameters to prevent the undefined arguments(parameters) error