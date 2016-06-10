import 'babel-polyfill';
import * as actionTypes from '../actions/action-types';
import initialState from '../../store/initial-state';

/**
 * Redux reducer for courses.
 * @param {state} state of the app with empty default.
 * @param {action} action Any course action.
 * @returns {state} New state from action.
 */
export default function courseReducer(
  state = initialState.courseReducer,
  action
) {
  switch (action.type) {
    case actionTypes.CREATE_COURSE_SUCCESS:
      return [...state, Object.assign({}, action.course)];
    case actionTypes.LOAD_COURSES_SUCCESS:
      return action.courses;
    case actionTypes.UPDATE_COURSE_SUCCESS:
      return [...state.filter((course) => course.id !== action.course.id),
        Object.assign({}, action.course)];
    default:
      return state;
  }
}