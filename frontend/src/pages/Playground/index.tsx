import React from 'react';
import samplecircuit from '../../assets/sample-circuit.png';
import './Playground.scoped.css';
import axios from '../../axiosconfig'

class Playground extends React.Component {

    state = {
        listResult: null,
        progress: null
    }

    run = (): void => {
        axios.post('http://localhost/sim', { n: 2 })
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