import * as actionTypes from './action-types';
import ajaxActions from '../../common/actions/ajax-status-actions';
import coursesApi from '../../api/courses';

const courseActions = {
  'loadCoursesSuccess': function loadCoursesSuccess(courses) {
    return {
      'type': actionTypes.LOAD_COURSES_SUCCESS,
      courses
    };
  },
  'loadCourses': function loadCourses() {
    return function loadCoursesDispatcher(dispatch) {
      dispatch(ajaxActions.beginAjaxCall());

      return coursesApi.getAll().
        then((courses) => {
          dispatch(courseActions.loadCoursesSuccess(courses));
        }).
        catch((err) => {
          throw err;
        });
    };
  },
  'saveCourse': function saveCourse(course) {
    return function saveCourseDispatcher(dispatch) {
      dispatch(ajaxActions.beginAjaxCall());

      return coursesApi.saveCourse(course).
        then((courseResponse) => {
          if (course.id) {
            dispatch(courseActions.updateCourseSuccess(courseResponse));
          } else {
            dispatch(courseActions.createCourseSuccess(courseResponse));
          }
        }).
        catch((err) => {
          throw err;
        });
    };
  },
  'updateCourseSuccess': function loadCoursesSuccess(course) {
    return {
      'type': actionTypes.UPDATE_COURSE_SUCCESS,
      course
    };
  },
  'createCourseSuccess': function loadCoursesSuccess(course) {
    return {
      'type': actionTypes.CREATE_COURSE_SUCCESS,
      course
    };
  }
};

export default courseActions;