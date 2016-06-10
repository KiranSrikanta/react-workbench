import ajaxStatusReducer from '../common/reducers/ajax-status-reducer';
import authorReducer from '../courses/reducers/authors-reducer';
import {combineReducers} from 'redux';
import courseReducer from '../courses/reducers/courses-reducer';

export const rootReducer = combineReducers({
    courseReducer,
    authorReducer,
    ajaxStatusReducer
});

export default rootReducer;