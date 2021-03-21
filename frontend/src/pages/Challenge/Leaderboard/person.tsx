import React from 'react';
import styled from 'styled-components'
import { Row } from 'react-bootstrap'

const Main = styled.div`
position: relative;
margin-left: auto;
margin-right: auto;
margin-top: 30px;
width: 500px;
align-items: center;
`
const Scroll = styled(Main)`
height: 62%;
overflow-y: scroll;
overflow-x: hidden;
&::-webkit-slider-thumb {
    width: 15px;
    height: 15px;
    border:1px solid black;
 }
`

const CardRow = styled.div`
    align-items: center;
    margin-bottom: 5px;
    width: 98%;
    background: rgba(255,255,255,0.3);
    img {
        border-radius: 50%;
        margin-top: 0px;
        margin-left: 30px;
        float: left;
        height: 60px;
    }
    p { 
        font-family: 'Kanit',sans-serif;
        font-size: 23px;
        margin-top: 10px;
        margin-bottom: 10px;
        display: inline-block;
        line-height: 40px;
    }
`

const CardSelf = styled(CardRow)`
position: absolute;
    background: rgba(255,255,255,0.3);
    margin-top: 10px;
`

interface IProps {
    data: {
        index: number;
        name: string;
        image: string;
        score: number;
    }[];
    self: {
        index: number;
        name: string;
        image: string;
        score: number;
    }
}

class Person extends React.Component<IProps> {

    render() {

        return (
            <React.Fragment>
                <Scroll>
                    {this.props.data.filter(person => person.index <= 10).map(person => {
                        return (
                            <CardRow>
                                <Row className="R">
                                    <p style={{ paddingLeft: "20px", width:'20px' }}>{person.index}</p>
                                    <img src={person.image} alt="profile icon"/>
                                    <p style={{ marginLeft: "35px" }}>{person.name} </p>
                                    <p style={{ position: "absolute", right: "40px" }}>{person.score}</p>
                                </Row>
                            </CardRow>
                        )
                    })}
                </Scroll>
                <Main>
                    <CardSelf>
                        <Row>
                            <p style={{ paddingLeft: "20px", width:'20px' }}>{this.props.self.index}</p>
                            <img src={this.props.self.image} alt="profile icon"/>
                            <p style={{ marginLeft: "35px" }}>{this.props.self.name} </p>
                            <p style={{ position: "absolute", right: "40px" }}>{this.props.self.score}</p>
                        </Row>
                    </CardSelf>
                </Main>

            </React.Fragment>
        );
    }
}

export default Person;
