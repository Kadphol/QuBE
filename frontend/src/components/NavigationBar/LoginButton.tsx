import React from 'react';
import '../../styles/LoginButton.css'

class LoginButton extends React.Component {

    Login = (): void => {
        window.location.href = "http://localhost/login"
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.Login} className="btn btn-primary"> Login </button>
            </React.Fragment>
        );
    }
}

export default LoginButton;