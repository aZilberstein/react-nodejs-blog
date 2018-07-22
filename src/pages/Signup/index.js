import React from 'react';
import SignupForm from '../../components/SignupForm';
import './style.css';

class Login extends React.Component {
    state = {
        email: '',
        fullName: '',
        password: '',
        passwordConfirmation: '',
    };
    onFieldInput = (name) => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    };
    onSubmit(val) {

    }
    isSignupFormValid() {
        const regex = {
            email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            fullName: /\w{3,20}/gi,
            password: /\w{5,20}/gi,
        };
        return regex.email.test(this.state.email)
            && regex.fullName.test(this.state.fullName)
            && regex.password.test(this.state.password)
            && this.state.passwordConfirmation === this.state.password;
    }
    render() {
        const isSubmitBtnDisabled = !this.isSignupFormValid();
        return (
            <div className="signupPage">
                <SignupForm email={this.state.email}
                            fullName={this.state.fullName}
                            password={this.state.password}
                            passwordConfirmation={this.state.passwordConfirmation}
                            onFieldInput={this.onFieldInput}
                            disabledSubmit={isSubmitBtnDisabled}
                            onSubmit={this.onSubmit}>
                </SignupForm>
            </div>
        );
    }
}

export default Login;