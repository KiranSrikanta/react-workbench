import * as actionTypes from '../actions/action-types';
import initialState from '../../store/initial-state';

const actionTypeEndsInSuccess = function actionTypeEndsInSuccess(type) {
  const successEnd = '_SUCCESS';

  return type.substring(type.length - successEnd.length) === successEnd;
};

/**
 * Redux reducer for courses.
 * @param {state} state current Ajax call count.
 * @param {action} action Any ajax action.
 * @returns {state} New Ajax call count.
 */
export default function ajaxStatusReducer(
  state = initialState.ajaxStatusReducer,
  action) {
    const ajaxCallIncrimentValue = 1;
    let ajaxCallCount = state;

    if (action.type === actionTypes.BEGIN_AJAX_CALL) {
      ajaxCallCount += ajaxCallIncrimentValue;
    } else if (actionTypeEndsInSuccess(action.type)) {
      ajaxCallCount -= ajaxCallIncrimentValue;
    }

    return ajaxCallCount;
}