import React from 'react';
import PostList from '../../components/PostList';


class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Latest posts</h1>
                    <PostList/>
                </div>
            </div>
        );
    }
}

export default Home;