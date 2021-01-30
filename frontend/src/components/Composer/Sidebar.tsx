import React from 'react';
import { Accordion, Card, Button } from "react-bootstrap";
import './Sidebar.scoped.css'
import bellpair from '../../assets/playground/bellpair.png'

const detail:Array<string> = [
    "Bell pair คือ การต่อวงจรให้คิวบิตนั้นเกิดการพัวพันกัน (Entanglement) โดยวิธีการคือต่อ Hadamard gate ให้คิวบิตหนึ่งมีสถานะ superposition และให้คิวบิตนั้นเป็นตัวควบคุมอีกคิวบิตหนึ่งด้วย CNOT เกต ผลลัพธ์ที่ได้ คือ คิวบิตทั้งสองตัวจะมีค่าเท่ากัน",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
]

class Sidebar extends React.Component {

    state = {
        onShow: null,
        active: -1
    }

    toggleShow = (id:number) => {
        let menu = document.getElementById("Menu")!
        menu.style['width'] = this.state.onShow? '25vw':'68vw'

        this.setState({onShow:!this.state.onShow, active:id})

    }

    render() {
        return (
            <div className="Menu" id="Menu">
                <Accordion defaultActiveKey="0">
                    {this.state.onShow && this.state.active!== 0 ? null: <Card> 
                        <Card.Header >
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                1: Bell Pair
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <img className="sampleCircuit" src={bellpair} />
                                <span className="detail">{this.state.onShow? detail[0] : null}</span>
                                <div className="buttonPanel2">
                                <button className="btn btn-primary" onClick={()=>this.toggleShow(0)}>{this.state.onShow? "ย้อนกลับ":"รายละเอียด"}</button>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>}
                    {this.state.onShow && this.state.active!== 1 ? null:<Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                2: Teleporation
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <img className="sampleCircuit" src={bellpair} />
                                <span className="detail">{this.state.onShow? detail[1] : null}</span>
                                <div className="buttonPanel2">
                                <button className="btn btn-primary" onClick={()=>this.toggleShow(1)}>{this.state.onShow? "ย้อนกลับ":"รายละเอียด"}</button>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>}
                    {this.state.onShow && this.state.active!== 2 ? null:<Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                3. Deutsch Jozsa algorithm
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                            <img className="sampleCircuit" src={bellpair} />
                                <span className="detail">{this.state.onShow? detail[2] : null}</span>
                                <div className="buttonPanel2">
                                <button className="btn btn-primary" onClick={()=>this.toggleShow(2)}>{this.state.onShow? "ย้อนกลับ":"รายละเอียด"}</button>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>}
                    {this.state.onShow && this.state.active!== 3 ? null:<Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                4. Grover's algorithm
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                            <img className="sampleCircuit" src={bellpair} />
                                <span className="detail">{this.state.onShow? detail[3] : null}</span>
                                <div className="buttonPanel2">
                                <button className="btn btn-primary" onClick={()=>this.toggleShow(3)}>{this.state.onShow? "ย้อนกลับ":"รายละเอียด"}</button>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>}
                </Accordion>
            </div >
        );
    }
}

export default Sidebar;