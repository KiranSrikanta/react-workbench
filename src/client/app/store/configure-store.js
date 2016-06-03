import {createStore} from 'redux';
//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {rootReducer} from '../reducers';

/**
 * Creates the redux store.
 * @param {initialState} initialState the initial state for the redux store.
 * @returns {store} The redux store.
 */
export default function configureStore (initialState) {
    return createStore(
        rootReducer,
        initialState,
        window.devToolsExtension()
    );
}