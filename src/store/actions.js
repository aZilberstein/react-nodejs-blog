// action types
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REQUEST_POST = 'REQUEST_POST';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const UPDATE_POSTS = 'UPDATE_POSTS';
export const UPDATE_SHOWN_POST = 'UPDATE_SHOWN_POST';

// action creators​
export function toggleSidebar(value) {
    return { type: TOGGLE_SIDEBAR, value };
};

export function loginUser(credentials) {
    return { type: LOGIN_USER, credentials };
};

export function logoutUser(userId) {
    return { type: LOGOUT_USER, userId };
};

export function requestPosts() {
    return { type: REQUEST_POSTS };
};

export function requestPost() {
    return { type: REQUEST_POST };
};

export function fetchPosts(filters) {
    return function (dispatch) {
        dispatch(requestPosts());
        return new Promise((resolve) => {
            const fakePosts = [
                {
                    id: 'post_1',
                    title: 'How to quit a job',
                    createdAt: 1532202452030,
                    image: 'https://www.ing.be/Assets/Images/EntryPoint_homepage_Business_01.jpg',
                    shortDescription: 'This is a story of how I quit my job to start my own business and made huge piles of money',
                    author: 'Andy Grishchenko',
                },
                {
                    id: 'post_2',
                    title: 'Vue vs React',
                    createdAt: 1532202452030,
                    image: 'https://vuejs.org/images/logo.png',
                    shortDescription: 'This is a story of how I started learning react after 1.5 years of happy life with Vue.js',
                    author: 'Andy Grishchenko',
                }
            ];
            setTimeout(() => {
                dispatch(updatePosts(fakePosts));
                resolve(fakePosts);
            }, 1500);
        });
    };
};

export function fetchPostById(postId) {
    return function (dispatch, getState) {
        dispatch(requestPost());
        const currentState = getState();
        return new Promise((resolve) => {
            setTimeout(() => {
                const fakePost = {
                    id: 'post_1',
                    title: 'How to quit a job',
                    createdAt: 1532202452030,
                    image: 'https://www.ing.be/Assets/Images/EntryPoint_homepage_Business_01.jpg',
                    shortDescription: 'This is a story of how I quit my job to start my own business and made huge piles of money',
                    author: 'Andy Grishchenko',
                };
                dispatch(updateShownPost(fakePost));
                resolve(fakePost);
            });
        });
    };
};

export function updatePosts(posts) {
    return { type: UPDATE_POSTS, posts }
};

export function updateShownPost(post) {
    return { type: UPDATE_SHOWN_POST, post };
};