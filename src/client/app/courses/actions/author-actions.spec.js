/*eslint-disable */
import { expect, mockStoreCreator } from '../../test-helper';
import * as actionTypes from '../actions/action-types';
import authorActions from './author-actions';
import * as commonActionTypes from '../../common/actions/action-types';

describe('AuthorActions', function () {
  describe('load authors', function () {
    let stubedFetch;
    beforeEach(() => {
       stubedFetch = sinon.stub(window, 'fetch');
    });
    
    it('should create a "load authors success" action', function (done) {
      const authors = [
        {
          id: 'cory-house',
          firstName: 'Cory',
          lastName: 'House'
        }
      ];
      
      stubedFetch.returnsPromise().resolves({json: () => authors});
      
      const expectedActions = [
        {
          type: commonActionTypes.BEGIN_AJAX_CALL
        },
        {
          type: actionTypes.LOAD_AUTHORS_SUCCESS,
          body: {authors}}
      ];
      const initialState = {};
      
      const store = mockStoreCreator(initialState, expectedActions);
      
      store.dispatch(authorActions.loadAuthors()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.equal(commonActionTypes.BEGIN_AJAX_CALL);
        expect(actions[1].type).to.equal(actionTypes.LOAD_AUTHORS_SUCCESS);
        expect(actions[1].authors).to.deep.equal(authors);
        done();
      });
    });
    
    afterEach(() => {
       sinon.restore(window.fetch);
    });
  });
});