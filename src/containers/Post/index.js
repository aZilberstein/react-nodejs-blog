import { connect } from 'react-redux'
import { fetchPosts } from "../../store/actions";
import PresentPost from '../../components/Post';

const mapStateToProps = state => {
    return {
        beingFetched: state.posts.beingFetched,
        post: state.posts.shownPost,
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