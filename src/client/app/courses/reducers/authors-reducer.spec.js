/*eslint-disable */
import { expect } from '../../test-helper';
import * as actionTypes from '../actions/action-types';
import AuthorReducer from './authors-reducer';

describe('AuthorReducer', function () {
  it('handles unknown action', function () {
    const newState = AuthorReducer([], { type: 'UNKNOWN' });
    expect(newState).to.deep.equal([]);
  });

  it('handles load author success action', function () {
    const authors = [{ someProp: "something" }];
    const state = [];
    const newState = AuthorReducer([], { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors });
    expect(newState).to.deep.equal(authors);
    expect(newState).to.not.equal(state);
  });
});