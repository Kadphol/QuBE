import React from 'react';
import { Accordion, Card, Button } from "react-bootstrap";
import './Sidebar.scoped.css'
import bellpair from '../../assets/playground/bellpair.png'
import Drag from './drag'

class Sidebar extends React.Component {

    render() {
        return (
            <div className="Menu">
                {/* <Drag/> */}
                <Accordion defaultActiveKey="0">
                    <Card >
                        <Card.Header >
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                1: Bell Pair
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <img src={bellpair} />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                2: Teleporation
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <img src={bellpair} />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                3. Shor's algorithm
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <img src={bellpair} />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                4. Deutsch Jozsa algorithm
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                <img src={bellpair} />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                5. Grover's algorithm'
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>
                                <img src={bellpair} />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div >
        );
    }
}

export default Sidebar;