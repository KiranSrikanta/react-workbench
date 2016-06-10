import * as actionTypes from './action-types';

const ajaxActions = {
  'beginAjaxCall': function beginAjaxCall() {
    return {
      'type': actionTypes.BEGIN_AJAX_CALL
    };
  }
};

export default ajaxActions;