import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import blogApp from './reducers';

const initialState = {
    showSidebar: false,
    user: {},
    posts: {
        beingFetched: false,
        didInvalidate: false,
        lastUpdated: 0,
        items: [],
    },
};

export default createStore(
    blogApp,
    initialState,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
    ));