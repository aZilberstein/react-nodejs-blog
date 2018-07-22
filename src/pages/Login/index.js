import React from 'react';
import LoginForm from '../../components/LoginForm';
import './style.css';

class Login extends React.Component {
    state = {
        login: '',
        password: '',
    };
    onFieldInput = (name) => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    };
    onSubmit(val) {

    }
    isLoginFormValid() {
        const regex = {
            login: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            password: /\w{5,20}/gi,
        };
        return regex.login.test(this.state.login) && regex.password.test(this.state.password);
    }
    render() {
        const isSubmitBtnDisabled = !this.isLoginFormValid();
        return (
            <div className="loginPage">
                <LoginForm login={this.state.login}
                           password={this.state.password}
                           onFieldInput={this.onFieldInput}
                           disabledSubmit={isSubmitBtnDisabled}
                           onSubmit={this.onSubmit}>
                </LoginForm>
            </div>
        );
    }
}

export default Login;