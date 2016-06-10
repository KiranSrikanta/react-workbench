/*eslint-disable */
import { expect, mockStoreCreator } from '../../test-helper';
import * as actionTypes from '../actions/action-types';
import courseActions from './course-actions';
import * as commonActionTypes from '../../common/actions/action-types';

describe('CourseActions', function () {
  describe('load courses', function () {
    let stubedFetch;
    beforeEach(() => {
       stubedFetch = sinon.stub(window, 'fetch');
    });
    
    it('should create a "load courses success" action', function (done) {
      const courses = [
        {
          id: 'cory-house',
          firstName: 'Cory',
          lastName: 'House'
        }
      ];
      
      stubedFetch.returnsPromise().resolves({json: () => courses});
      
      const expectedActions = [
        {
          type: commonActionTypes.BEGIN_AJAX_CALL
        },
        {
          type: actionTypes.LOAD_COURSES_SUCCESS,
          body: {courses}}
      ];
      const initialState = {};
      
      const store = mockStoreCreator(initialState, expectedActions);
      
      store.dispatch(courseActions.loadCourses()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.equal(commonActionTypes.BEGIN_AJAX_CALL);
        expect(actions[1].type).to.equal(actionTypes.LOAD_COURSES_SUCCESS);
        expect(actions[1].courses).to.deep.equal(courses);
        done();
      });
    });

    afterEach(() => {
       sinon.restore(window.fetch);
    });
  });

  describe('save course', function () {
    let stubedFetch;
    beforeEach(() => {
       stubedFetch = sinon.stub(window, 'fetch');
    });
    
    it('should create a "create course success" action', function (done) {
      const course = {
        title: "Clean Code: Writing Code for Humans",
        watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
        authorId: "cory-house",
        length: "3:10",
        category: "Software Practices"
      };
      
      const courseWithId = Object.assign({}, course, {id: 'clean-code'});
      stubedFetch.returnsPromise().resolves({json: () => courseWithId});
      
      const expectedActions = [
        {
          type: commonActionTypes.BEGIN_AJAX_CALL
        },
        {
          type: actionTypes.CREATE_COURSE_SUCCESS,
          body: {course: courseWithId}}
      ];
      const initialState = {};
      
      const store = mockStoreCreator(initialState, expectedActions);
      
      store.dispatch(courseActions.saveCourse(course)).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.equal(commonActionTypes.BEGIN_AJAX_CALL);
        expect(actions[1].type).to.equal(actionTypes.CREATE_COURSE_SUCCESS);
        expect(actions[1].course).to.deep.equal(courseWithId);
        done();
      });
    });

    it('should create a "update course success" action', function (done) {
      const course = {
        id: "clean-code",
        title: "Clean Code: Writing Code for Humans",
        watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
        authorId: "cory-house",
        length: "3:10",
        category: "Software Practices"
      };
      
      const courseWithNewTitle = Object.assign({}, course, {title: 'NEW'});
      stubedFetch.returnsPromise().resolves({json: () => courseWithNewTitle});
      
      const expectedActions = [
        {
          type: commonActionTypes.BEGIN_AJAX_CALL
        },
        {
          type: actionTypes.LOAD_COURSES_SUCCESS,
          body: {course: courseWithNewTitle}}
      ];
      const initialState = {};
      
      const store = mockStoreCreator(initialState, expectedActions);
      
      store.dispatch(courseActions.saveCourse(course)).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.equal(commonActionTypes.BEGIN_AJAX_CALL);
        expect(actions[1].type).to.equal(actionTypes.UPDATE_COURSE_SUCCESS);
        expect(actions[1].course).to.deep.equal(courseWithNewTitle);
        done();
      });
    });

    afterEach(() => {
       sinon.restore(window.fetch);
    });
  });
});