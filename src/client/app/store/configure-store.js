import {createStore} from 'redux';
//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {rootReducer} from '../reducers/index';

/**
 * Creates the redux store.
 * @param {initialState} initialState the initial state for the redux store.
 * @returns {store} The redux store.
 */
export default function configureStore (initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        window.devToolsExtension()
    );
    
    return store;
}