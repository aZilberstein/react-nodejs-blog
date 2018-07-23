import React from 'react';
import AllPostsList from '../../containers/AllPostsList';
import { store } from '../../store';
import { fetchPosts } from '../../store/actions';


class Posts extends React.Component {
    componentDidMount() {
        store.dispatch(fetchPosts());
    };
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Latest posts</h1>
                    <AllPostsList />
                </div>
            </div>
        );
    }
}

export default Posts;