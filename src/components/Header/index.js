import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CurrentDate from '../../components/CurrentDate';
import './style.css';

const styles = {
    root: {
        flexGrow: 0,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class ButtonAppBar extends React.Component {
    constructor(props) {
        super();
        this.classes = props.classes;
    };
    onMenuClick = () => {
        this.props.onToggleSidebar();
    };
    render() {
        return (
            <div className={this.classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={this.classes.menuButton}
                                    onClick={this.onMenuClick}
                                    color="inherit"
                                    aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={this.classes.flex}>
                            <div className="app__headerMiddle">
                                <Link className="routerLink" to="/">Andy's Blog</Link>
                                <div className="app__headerTime">
                                    <CurrentDate />
                                </div>
                            </div>
                        </Typography>
                        <Button color="inherit">
                            <Link className="routerLink" to="/login">Login</Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    };
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);