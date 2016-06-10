import 'whatwg-fetch';

const coursesApi = {
  'getAll': function getAll() {
    return fetch('http://localhost:3000/api/courses').
      then((response) => response.json());
  },
  'saveCourse': function saveCourse(course) {
    let resultPromise = null;

    if (course.id) {
      resultPromise = fetch(`http://localhost:3000/api/courses/${course.id}`, {
        'method': 'PUT',
        'headers': {
          'Content-Type': 'application/json'
        },
        'body': JSON.stringify(course)
      });
    } else {
      resultPromise = fetch('http://localhost:3000/api/courses', {
        'method': 'POST',
        'headers': {
          'Content-Type': 'application/json'
        },
        'body': JSON.stringify(course)
      });
    }

    return resultPromise.
      then((response) => response.json());
  }
};

export default coursesApi;