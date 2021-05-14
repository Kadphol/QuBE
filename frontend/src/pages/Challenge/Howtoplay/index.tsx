import React from 'react';
import styled from 'styled-components';
import Dialog from '@components/DialogBox'
import SkipButton from '@components/Button/skip'
import { Redirect } from "react-router-dom";
import kingIcon from '@assets/challenge/kingIcon.png'
import {F0,F1,F2} from './Frame'

const Main = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;
`;

interface IProps {
}

class Intro extends React.Component <IProps> {

    state = {frame: 0}

    data = {
      icon: kingIcon,
      frameComponent: [F0,F1,F2,F0],
      script: [ `ท่านคิดว่าท่านคงฝึกหนักมาน่าดูเลย ข้าจะสอนวิธีเข้าไปต่อสู้กับมังกรร้ายตัวนี้เอง`,
                `เริ่มจาก เมื่อท่านเข้าไปก็จะเจอ บลาๆๆๆ`,
                `ตรงนี้เวลา ตรงนี้คะแนน ตรงนี้คะแนนสะสม บลาๆๆๆ`,
                `ข้าคิดว่าท่านพร้อมที่จะเผชิญหน้ากับมังกรร้ายแล้ว ขอให้ท่านโชคดี`]
    }

    lastFrame = this.data.frameComponent.length
    redirect = "/challenge"

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
        var {icon,script} = this.data
        const { frameComponent: Component } = this.data;
        return (
        <Main>
                {Component.map((Item,index)=>(
                    frame === index && 
                    <div>
                        <Item/>
                        <Dialog showNext next={this.next} img={icon} message={script[index]} />
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