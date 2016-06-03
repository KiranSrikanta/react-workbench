import * as actionTypes from './action-types';

/**
 * Instanciates a create course action.
 * @param {course} course object.
 * @returns {action} The create course action.
 */
const courseActions = {
    'createCourse': function createCourse (course) {
        return {
            'type': actionTypes.CREATE_COURSE,
            course
        };
    }
};

export default courseActions;