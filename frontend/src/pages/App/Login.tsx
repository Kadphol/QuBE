import React from 'react';
import axios, {AxiosRequestConfig, AxiosInstance} from 'axios'

interface userProps {
    //props
}

interface userState {
    loginStatus: boolean
    name?: string
    image?: string
    progress?: {
        chaper?: number,
        unit?: number,
        star?: number[],
        score?: number
    }
}

const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true
  }
  
const instance: AxiosInstance = axios.create(config)

class LoginButton extends React.Component<userProps, userState> {

    constructor(props: userState) {
        super(props);
        this.state = {
            loginStatus: false
        };
    }

    componentDidMount(): void {
        console.log("Mount")
        instance.get('http://localhost/fetch')
            .then(res => {
                if(res.data) {
                this.setState({
                    loginStatus: true,
                    name: res.data.name,
                    image: res.data.image,    
                    progress: res.data.progress
                }); 
                console.log(this.state)
                }
            })
    }

    Login = (): void => {
        window.location.href = "http://localhost/login"
    }

    Logout = (): void => {
        window.location.href = "http://localhost/logout"
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.state.loginStatus?this.Logout:this.Login} className="btn btn-primary"> {this.state.loginStatus ? "Logout" : "Login"} </button>
                <br />
                <a>{this.state.loginStatus ? "Welcome" : ""} {this.state.name}</a>
                <br/>
                <img src={this.state.image}/>
            </React.Fragment>
        );
    }
}

export default LoginButton;