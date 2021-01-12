import React from 'react';
import x from '../../assets/playground/x.png';
import h from '../../assets/playground/h.png';
import m from '../../assets/playground/m.png';
import empty from '../../assets/playground/line.png';
import q0 from '../../assets/playground/0.png';
// import q1 from '../../assets/playground/1.png';
import './Playground.scoped.css';
import axios from '../../axiosconfig'
import { Row } from 'react-bootstrap';

const dict: { [id: string] : string; } = {'x':x,'h':h,'empty':empty};

interface IProps {
}

interface IState {
  listResult: string;
  active: string;
  n: number;
  ccimg: string[][];
  cc: string[]
}

class Playground extends React.Component <IProps,IState>{

    state = {
        listResult: '',
        active: 'empty',
        n:2,
        ccimg: [['empty'],['empty']],
        cc: Array()
    }

    run = (): void => {
        axios.post('http://localhost/sim', {n:this.state.n,cc:this.state.cc})
            .then((res) => {

                let results = res.data.split('\n')
                let list = results.map((result:string) =>
                    <li>{result}</li>
                );
                this.setState({ listResult: list })
            })
    }

    activate = (gate:string): void => {
        this.setState({active:gate})
    }

    place = (wire:number,col:number): void => {
        const newccimg = this.state.ccimg.slice()
        newccimg[wire][col] = this.state.active

        var cc = this.state.cc

        const index = cc.findIndex(el=>el.wire===wire && el.col===col)

        if(index!==-1) cc.splice(index,1)

        if(this.state.active!=='empty'){
            const newgate = {
                gate:this.state.active,
                wire,
                col
            }
            cc = [...cc,newgate]
        }

        
        console.log(cc)
        this.setState({cc:cc,ccimg:newccimg,active:'empty'})
    }

    render() {
        return (
            <div className="playground">
                <div className="cc">
                    <br></br>
                    <p className="large">Active: {this.state.active}</p>
                    <Row>
                        <img className="left" src={x} alt="x" onClick={()=>this.activate('x')}/>
                        <img className="left" src={h} alt="h" onClick={()=>this.activate('h')}/>
                        {/* <img className="left" src={empty} alt="h" onClick={()=>this.activate('empty')}/> */}
                    </Row>
                    <Row>
                        <img src={q0} alt="bit0" />
                        <img src={dict[this.state.ccimg[0][0]]} alt="w0c0"  onClick={()=>this.place(0,0)} />
                        <img src={m} alt="m0" />
                    </Row>
                    <Row>
                        <img src={q0} alt="bit1" />
                        <img src={dict[this.state.ccimg[1][0]]} alt="w1c0" onClick={()=>this.place(1,0)}/>
                        <img src={m} alt="m1" />
                    </Row>
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