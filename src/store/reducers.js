import {
    SET_SIDEBAR_VISIBILITY,
    LOGIN_USER,
    // LOGOUT_USER,
    REQUEST_POST,
    REQUEST_POSTS,
    UPDATE_POSTS,
    UPDATE_SHOWN_POST,
} from './actions';

function setSidebarVisbility(state = false, action) {
    switch (action.type) {
        case SET_SIDEBAR_VISIBILITY:
            return action.visibility;
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
        case REQUEST_POST:
            return {
                ...state,
                beingFetched: true,
            };
        case UPDATE_SHOWN_POST:
            return {
                ...state,
                beingFetched: false,
                shownPost: action.post,
            };
        default:
            return state;
    }
};


const blogApp = function reducer(state = {}, action) {
    return {
        showSidebar: setSidebarVisbility(state.showSidebar, action),
        user: loginUser(state.user, action),
        posts: posts(state.posts, action),
    }
};

export default blogApp;