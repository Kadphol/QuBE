import React from 'react';

const Login = () => {
    const state = {
        loginStatus: false
    } 
    return (
        <div>
            <a style={this.state.loginStatus?"display:none":""} href="http://127.0.0.1:80/auth/facebook">
                <button> Login </button>
            </a>
        </div>
    )
}

export default Login;
