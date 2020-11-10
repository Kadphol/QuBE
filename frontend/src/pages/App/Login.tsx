import React from 'react';
import https from 'https';
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

interface userProps {
  // props
}

interface userState {
  loginStatus: boolean;
  name?: string;
}

const config: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

const instance: AxiosInstance = axios.create(config);

class LoginButton extends React.Component<userProps, userState> {
  constructor(props: userState) {
    super(props);
    this.state = {
      loginStatus: false,
    };
  }

  componentDidMount(): void {
    console.log('Mount');
    instance.get('http://localhost/').then((res) => {
      console.log(res.data);
      const { data } = res;
      this.setState({
        loginStatus: data.status,
        name: data.name,
      });
    });
  }

  Login = (): void => {
    window.location.href = 'http://localhost/login';
  };

  Logout = (): void => {
    window.location.href = 'http://localhost/logout';
  };

  render() {
    return (
      <>
        <button
          onClick={this.state.loginStatus ? this.Logout : this.Login}
          className="btn btn-primary"
        >
          {' '}
          {this.state.loginStatus ? 'Logout' : 'Login'}{' '}
        </button>
        <br />
        <a>
          {this.state.loginStatus ? 'Welcome' : ''} {this.state.name}
        </a>
      </>
    );
  }
}

export default LoginButton;
