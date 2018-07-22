import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import './style.css';

const styles = theme => ({
    card: {
        minWidth: 300,
    },
    title: {
        fontSize: 24,
        fontWeight: 500,
        textAlign: 'center',
    },
    textField: {
        width: '100%',
    },
    button: {
        width: '100%',
    },
});

const LoginForm = ({login, password, onFieldInput, disabledSubmit, onSubmit, classes}) => {
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title}>
                    Login
                </Typography>
                <form className="loginForm__form">
                    <FormGroup>
                        <TextField
                            id="login"
                            label="Login"
                            className={classes.textField}
                            value={login}
                            onChange={onFieldInput('login')}
                            margin="normal"
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            id="password"
                            label="Password"
                            className={classes.textField}
                            value={password}
                            onChange={onFieldInput('password')}
                            margin="normal"
                            type="password"
                        />
                    </FormGroup>
                    <div className="loginForm__buttonWrapper">
                        <Button variant="contained"
                                color="primary"
                                disabled={disabledSubmit}
                                className={classes.button}>
                            Sign in
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

LoginForm.propTypes = {
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onFieldInput: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(LoginForm);