/*eslint-disable */
import {createStore} from 'redux';
import {expect} from '../test-helper';
import initialState from './initial-state';
import rootReducers from '../reducers';
import courseActions from '../courses/actions/course-actions';

describe('Store', function () {
  it('should handle creating courses', function () {
    const store = createStore(rootReducers, initialState);
    const course = {
      title: "Something"
    };
    
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);
    expect(store.getState().courseReducer[0]).to.deep.equal(course);
  })
});