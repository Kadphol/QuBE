import React from 'react';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import samplecircuit from '../../assets/sample-circuit.png';
import './Playground.scoped.css';

const config: AxiosRequestConfig = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
}
const instance: AxiosInstance = axios.create(config);

class Playground extends React.Component {

    state = {
        listResult: null
    }

    run = (): void => {
        instance.post('http://localhost/sim', { n: 2 })
            .then((res) => {

                let results = res.data.split('\n')
                let list = results.map((result:string) =>
                    <li>{result}</li>
                );
                console.log(list)
                this.setState({ listResult: list })
            })
    }

    render() {
        return (
            <div>
                <div>
                    <img src={samplecircuit} alt="sample-circuit" />
                </div >
                <div>
                    <button className="btn btn-primary" onClick={this.run}>Run</button>
                    <br /><br/>
                    <ul>
                        {this.state.listResult}    
                    </ul>
                </div>
            </div>
        );
    }
}

export default Playground;