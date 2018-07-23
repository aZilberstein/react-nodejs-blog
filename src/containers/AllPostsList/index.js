import { connect } from 'react-redux'
import { fetchPosts } from "../../store/actions";
import PresentPostList from '../../components/PostList/index';

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

const AllPostList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PresentPostList);

export default AllPostList;