import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';


const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class PresentSidebar extends React.Component {
    toggleDrawer = (open) => () => {
        this.props.onToggleDrawer(open);
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <ListItem component={Link} to="/" button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Homepage" />
                    </ListItem>
                    <Divider />
                    <ListItem component={Link} to="/login" button>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Log in" />
                    </ListItem>
                    <ListItem component={Link} to="/signup" button>
                        <ListItemIcon>
                            <VerifiedUserIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sign up" />
                    </ListItem>
                </List>
            </div>
        );


        return (
            <Drawer open={this.props.open} onClose={this.toggleDrawer(false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer(false)}
                    onKeyDown={this.toggleDrawer(false)}
                >
                    {sideList}
                </div>
            </Drawer>
        );
    }
}

PresentSidebar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PresentSidebar);