import 'babel-polyfill';
import * as actionTypes from '../courses/actions/action-types';

/**
 * Redux reducer for courses.
 * @param {state} state of the app with empty default.
 * @param {action} action Any course action.
 * @returns {state} New state from action.
 */
export default function courseReducer (state = [], action) {
    switch (action.type) {
        case actionTypes.CREATE_COURSE:
            return [...state, Object.assign({}, action.course)];
        default:
            return state;
    }
}