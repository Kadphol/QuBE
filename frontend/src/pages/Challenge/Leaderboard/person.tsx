import React from 'react';
import styled from 'styled-components'
import { Row } from 'react-bootstrap'
import qubie from '@assets/explore/qubieIcon.png'
import beck from '@assets/explore/chapter1/beckIcon.png'
import gust from '@assets/explore/chapter4/gustIcon.png'

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
    align-items: left;
    width: 97%;
    height: 65px;
    line-height: 65px;
    background: rgba(255,255,255,0.5);
    margin-top: 5px;
    border-radius: 5px;
    * {display: inline;}
    img {
        border-radius: 50%;
        height: 65px;
        padding: 2px 15px 2px;
    }
    p {     
        font-family: 'Kanit',sans-serif;
        font-size: 23px;
        line-height: 60px;
    }
`

const CardSelf = styled(CardRow)`
position: absolute;
    background: rgba(255,255,255,0.5);
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

    state = {
        data: [{
            index: 1,
            name: "Beck",
            image: beck,
            score: 1250
        },
        {
            index: 2,
            name: "Gust",
            image: gust,
            score: 930
        },
        {
            index: 3,
            name: "Qubie",
            image: qubie,
            score: 650
        }],
        self: {
            index: 3,
            name: "Qubie",
            image: qubie,
            score: 650
        }
    }

    render() {

        return (
            <React.Fragment>
                <Scroll>
                    {this.props.data.filter(person => person.index <= 10).map(person => {
                        return (
                            <CardRow>
                                    <p style={{position: "absolute", left: "30px"}}>{person.index}</p>
                                    <img src={person.image} alt="profile icon" style={{ position: "absolute", left: "50px"}}/>
                                    <p style={{ position: "absolute", left: "155px" }}>{person.name} </p>
                                    <p style={{ position: "absolute", right: "40px" }}>{person.score}</p>
                            </CardRow>
                        )
                    })}
                </Scroll>
                <Main>
                    <CardSelf>
                            <p style={{ position: "absolute", left: "30px"}}>{this.props.self.index}</p>
                            <img src={this.props.self.image} alt="profile icon" style={{ position: "absolute", left: "50px"}}/>
                            <p style={{ position: "absolute", left: "155px" }}>{this.props.self.name} </p>
                            <p style={{ position: "absolute", right: "40px" }}>{this.props.self.score}</p>
                    </CardSelf>
                </Main>

            </React.Fragment>
        );
    }
}

export default Person;
