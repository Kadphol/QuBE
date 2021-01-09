import React from 'react';
import x from '../../assets/playground/x.png';
import h from '../../assets/playground/h.png';
import m from '../../assets/playground/m.png';
import empty from '../../assets/playground/line.png';
import q from '../../assets/playground/0.png';
import './Composer.scoped.css';
import axios from '../../axiosconfig';
import { Row } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

const dict: { [id: string]: string; } = { 'x': x, 'h': h, 'empty': empty };
const emptyWire = ['empty','empty','empty','empty','empty','empty','empty']

interface IProps {
}

interface IState {
    active: string;
    n: number;
    ccimg: string[][];
    cc: string[];
    result: {
        labels: Array<string>,
        datasets: Array<{
            backgroundColor: string;
            borderColor: string;
            borderWidth: number;
            data: Array<number>;
        }>
    }
}

class Composer extends React.Component<IProps, IState>{

    state = {
        active: 'empty',
        n: 2,
        ccimg: [emptyWire.slice(),emptyWire.slice()],
        cc: Array(),
        result: {
            labels: ['00', '01', '10', '11'],
            datasets: [
                {
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [0, 0, 0, 0]
                }
            ]
        }
    }

    run = (): void => {
        axios.post('http://localhost/sim', { n: this.state.n, cc: this.state.cc })
            .then((res) => {
                let result = this.state.result
                result.labels = res.data.labels
                result.datasets[0].data = res.data.values
                this.setState({ result: result })
                console.log(result)
            })
    }

    activate = (e:React.MouseEvent<HTMLElement>,gate: string): void => {
        const target = e.target as Element
        console.log(target.id)
        this.setState({ active: gate })
        
        console.log(this.state.ccimg)
    }

    place = (wire: number, col: number): void => {
        
        let newccimg = this.state.ccimg.slice()
        newccimg[wire][col] = this.state.active
        
        var cc = this.state.cc

        const index = cc.findIndex(el => el.wire === wire && el.col === col)

        if (index !== -1) cc.splice(index, 1)

        if (this.state.active !== 'empty') {
            const newgate = {
                gate: this.state.active,
                wire,
                col
            }
            cc = [...cc, newgate]
        }

        this.setState({ cc: cc, ccimg: newccimg, active: 'empty' })
    }

    reset = () =>{
        let ccimg = [emptyWire.slice(),emptyWire.slice()]
        let cc = Array()
        this.setState({ccimg:ccimg,cc:cc,n:2})
    }

    addWire = () => {
        console.log(this.state)
        let ccimg = this.state.ccimg
        ccimg.push(emptyWire.slice())
        let n = this.state.n+1
        this.setState({ccimg:ccimg,n:n})
    }

    removeWire = () => {
        let ccimg = this.state.ccimg
        ccimg.pop()
        let n = this.state.n-1 
        let cc = this.state.cc.filter(el=>el.wire<n)
        console.log(cc)
        this.setState({ccimg:ccimg,cc:cc,n:n})
    }

    render() {
        return (

            <div className="Composer">
                <br/>
                {/* <p className="large">Active: {this.state.active}</p> */}
                <div className="gates">
                    {Object.keys(dict).map(key=>{
                        return <img className="gate" src={dict[key]} onClick={(e) => this.activate(e,key)} />
                    })}
                </div>
                <br/>
                <div className="circuit">
                    {this.state.ccimg.map((wire, w) => {
                        return (
                            <Row className="row">
                            <img src={q} className="small" />
                            {wire.map((col:string, c:number) => { 
                                return <img className="small" src={dict[col]} onClick={() => this.place(w, c)} /> 
                            })}
                            <img src={m} className="small" />
                            </Row>
                        )
                    })}
                </div>

                <div className="buttonPanel">
                <button className="btn btn-primary" onClick={this.run}>Run</button>
                <button className="btn btn-primary" onClick={this.reset}>Reset</button>
                <button className="btn btn-primary" disabled={this.state.n>4} onClick={this.addWire}>Add Wire</button>
                <button className="btn btn-primary" disabled={this.state.n<2} onClick={this.removeWire}>Remove Wire</button>
                </div>
                <Bar
                    data={this.state.result} 
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        title: {
                            display: false
                        },
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [{
                                barPercentage: 0.5 
                            }],
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    min: 0,
                                    max: 100
                                }
                            }]
                        }
                    }}
                />
            </div>
        );
    }
}

export default Composer;