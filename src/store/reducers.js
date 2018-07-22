import {
    TOGGLE_SIDEBAR,
    LOGIN_USER,
    // LOGOUT_USER,
    REQUEST_POSTS,
    UPDATE_POSTS,
} from './actions';

function toggleSidebar(state = false, action) {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return action.value;
        default:
            return state;
    }
};

function loginUser(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return [
                ...state,
                {
                    credentials: action.credentials,
                }
            ];
        default:
            return state;
    }
};

// function logoutUser(state = {}, action) {
//     switch (action.type) {
//         case LOGOUT_USER:
//             return [
//                 ...state,
//                 {
//                     credentials: {},
//                 }
//             ];
//         default:
//             return state;
//     };
// };

function posts(state = {
             beingFetched: false,
             didInvalidate: false,
             lastUpdated: 0,
             items: [],
         }, action) {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                beingFetched: true,
                didInvalidate: false,
            };
        case UPDATE_POSTS:
            return {
                ...state,
                beingFetched: false,
                didInvalidate: false,
                lastUpdated: Date.now(),
                items: action.posts,
            };
        default:
            return state;
    }
};


const blogApp = function reducer(state = {}, action) {
    return {
        showSidebar: toggleSidebar(state.showSidebar, action),
        user: loginUser(state.user, action),
        posts: posts(state.posts, action),
    }
};

export default blogApp;