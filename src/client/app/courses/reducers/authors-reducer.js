import 'babel-polyfill';
import * as actionTypes from '../actions/action-types';
import initialState from '../../store/initial-state';

/**
 * Redux reducer for authors.
 * @param {state} state of the app with empty default.
 * @param {action} action Any author action.
 * @returns {state} New state from action.
 */
export default function authorReducer(
  state = initialState.authorReducer,
  action
) {
  switch (action.type) {
    case actionTypes.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}