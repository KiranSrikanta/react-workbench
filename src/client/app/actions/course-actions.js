/**
 * Instanciates a create course action.
 * @param {course} course object.
 * @returns {action} The create course action.
 */
const courseActions = {
    'createCourse': function createCourse (course) {
        return {
            'type': 'CREATE_COURSE',
            course
        };
    },
    'deleteCourse': function deleteCourse (course) {
        return {
            'type': 'CREATE_COURSE',
            course
        };
    }
};


export default courseActions;