import 'whatwg-fetch';

const coursesApi = {
    'getAll': function getAll () {
        return fetch('http://localhost:3000/api/authors').
          then((response) => response.json());
    }
};

export default coursesApi;