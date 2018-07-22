import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import PostCard from '../PostCard';
import { Link } from 'react-router-dom';


const styles = {
    fullList: {
        width: 'auto',
    },
};

class PresentPostList extends React.Component {
    fetchPosts = (filters) => () => this.props.onFetchPosts(filters);;

    componentDidMount() {
        this.fetchPosts()();
    };
    render() {
        const { classes, posts } = this.props;

        const postCards = posts.map((post, index) =>
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <Link to={'/posts/' + post.id} className="routerLink routerLink--block">
                    <PostCard {...post} />
                </Link>
            </Grid>
        );

        return (
            <div className={classes.list}>
                <Grid container spacing={16}>
                    { postCards }
                </Grid>
            </div>
        );
    }
}

PresentPostList.propTypes = {
    classes: PropTypes.object.isRequired,
    onFetchPosts: PropTypes.func.isRequired,

};

export default withStyles(styles)(PresentPostList);