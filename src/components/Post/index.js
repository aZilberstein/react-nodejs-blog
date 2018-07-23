import React from 'react';
import PropTypes from 'prop-types';


class Post extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Post {...this.props} />
                </div>
            </div>
        );
    }
}

Post.PropTypes = {
    classes: PropTypes.object.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.number.isRequired,
    image: PropTypes.string,
    shortDescription: PropTypes.string,
    text: PropTypes.string,
};

export default Post;

connect();