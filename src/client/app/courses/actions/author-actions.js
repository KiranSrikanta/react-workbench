import * as actionTypes from './action-types';
import ajaxActions from '../../common/actions/ajax-status-actions';
import authorsApi from '../../api/authors';

/**
 * Instanciates a create course action.
 * @param {course} course object.
 * @returns {action} The create course action.
 */
const authorActions = {
  'loadAuthorsSuccess': function loadAuthorsSuccess(authors) {
    return {
      'type': actionTypes.LOAD_AUTHORS_SUCCESS,
      authors
    };
  },
  'loadAuthors': function loadAuthors() {
    return function dispatcher(dispatch) {
      dispatch(ajaxActions.beginAjaxCall());

      return authorsApi.getAll().
        then((authors) => {
          dispatch(authorActions.loadAuthorsSuccess(authors));
        }).
        catch((err) => {
          throw err;
        });
    };
  }
};

export default authorActions;