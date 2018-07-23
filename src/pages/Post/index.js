import React from 'react';
import {
    BrowserRouter as matchPath,
} from 'react-router-dom';
// import { store } from '../../store';
// import { fetchPostById} from "../../store/actions";

class Post extends React.Component {
    componentDidMount() {
        console.log('matchPath', matchPath);
        console.log('post page mounted, this.props: ', this.props);
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Post - {this.props.match.params.id}</h1>
                </div>
            </div>
        );
    }
}

export default Post;