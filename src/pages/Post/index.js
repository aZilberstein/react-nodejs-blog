import React from 'react';
import PropTypes from 'prop-types';


class Post extends React.Component {
    componentDidMount() {
        const state = store.getState();
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Latest posts</h1>
                    <Post />
                </div>
            </div>
        );
    }
}

Post.PropTypes = {

};

export default Home;

connect();