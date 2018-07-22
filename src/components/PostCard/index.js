import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const styles = theme => ({
    card: {
        maxWidth: 400,
        textDecoration: 'none',
        color: 'inherit',
    },
    title: {
        fontSize: '1rem',
        lineHeight: 1.2,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    avatar: {
        backgroundColor: red[500],
    },
    author: {
        marginLeft: 'auto',
    }
});

class PostCard extends React.Component {
    truncateText(string, limit) {
        return string.length > limit ? string.slice(0, limit) + '...' : string;
    }
    render() {
        const { classes } = this.props;
        const formattedPostDate = moment(this.props.createdAt).format('MMMM DD, YYYY');
        const fallbackShortDescription = this.props.text && this.truncateText(this.props.text, 100);

        return (
            <Card className={classes.card}>
                <CardHeader
                    title={ this.props.title }
                    subheader={formattedPostDate}
                    classes={{ title: classes.title }}
                />
                { this.props.image &&
                <CardMedia
                    className={classes.media}
                    image={this.props.image}
                    title={this.props.title + ' image'}
                />
                }
                <CardContent>
                    <Typography component="p">
                        {this.truncateText(this.props.shortDescription, 100) || fallbackShortDescription}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <Typography className={classes.author}>{ this.props.author }</Typography>
                </CardActions>
            </Card>
        );
    }
}

PostCard.propTypes = {
    classes: PropTypes.object.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.number.isRequired,
    image: PropTypes.string,
    shortDescription: PropTypes.string,
    text: PropTypes.string,
};

export default withStyles(styles)(PostCard);