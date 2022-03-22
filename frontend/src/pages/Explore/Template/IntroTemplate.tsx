import React from 'react';
import styled from 'styled-components';
import Dialog from '@components/DialogBox'
import SkipButton from '@components/Button/skip'
import { Redirect } from "react-router-dom";

const Main = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;
`;

interface IProps {
    chapter: number;
    unit: number;
    frameComponent: React.ComponentType<any>[];
    script: string[];
    icon: string[];
}

class Intro extends React.Component <IProps> {

    state = {frame: 0}

    lastFrame = this.props.frameComponent.length
    redirect = "/explore/chapter-".concat(this.props.chapter.toString())

    next = () => {
        let nextFrame = this.state.frame + 1
        this.setState({ frame: nextFrame })
    }

    skip = () => {
        this.setState({frame:this.lastFrame})
    }

    componentWillReceiveProps = () => {
        this.forceUpdate();
    }

    render() {
        var {frame} = this.state
        var {icon,script} = this.props
        const { frameComponent: Component } = this.props;
        return (
        <Main>
                {Component.map((Item,index)=>(
                    frame === index && 
                    <div key={index}>
                        <Item next={this.next}/>
                        {index > 0 && <Dialog showNext next={this.next} img={icon[index]} message={script[index]} />}
                        <SkipButton path={this.redirect}/>
                    </div>
                )
                )}
                {frame === this.lastFrame && <Redirect to={this.redirect} />}
            </Main>
        );
    }
}

export default Intro