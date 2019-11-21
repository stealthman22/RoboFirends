import { CHANGE_SEARCH_FIELD } from './constants.js';


// The reducers start point
const initialState = {
    searchField: ''
}


// reducer
// Use Es6 syntax to set default parameters at once
export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}