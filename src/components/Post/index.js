import { connect } from 'react-redux'
import { fetchPosts } from "../../store/actions";
import PresentPost from './PresentPost';

const mapStateToProps = state => {
    return {
        beingFetched: state.posts.beingFetched,
        posts: state.posts.items,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: filters => dispatch(fetchPosts(filters)),
    };
};

const Post = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PresentPost);

export default Post;