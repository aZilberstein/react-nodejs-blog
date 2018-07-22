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

const SignupForm = ({email, fullName, password, passwordConfirmation, onFieldInput, disabledSubmit, onSubmit, classes}) => {
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title}>
                    Sign up
                </Typography>
                <form className="signupForm__form">
                    <FormGroup>
                        <TextField
                            id="email"
                            label="Email"
                            className={classes.textField}
                            value={email}
                            onChange={onFieldInput('email')}
                            margin="normal"
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            id="fullName"
                            label="Full name"
                            className={classes.textField}
                            value={fullName}
                            onChange={onFieldInput('fullName')}
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
                    <FormGroup>
                        <TextField
                            id="passwordConfirmation"
                            label="Confirm password"
                            className={classes.textField}
                            value={passwordConfirmation}
                            onChange={onFieldInput('passwordConfirmation')}
                            margin="normal"
                            type="password"
                        />
                    </FormGroup>
                    <div className="signupForm__buttonWrapper">
                        <Button variant="contained"
                                color="primary"
                                onClick={onSubmit}
                                disabled={disabledSubmit}
                                className={classes.button}>
                            Sign up
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

SignupForm.propTypes = {
    email: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirmation: PropTypes.string.isRequired,
    onFieldInput: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(SignupForm);