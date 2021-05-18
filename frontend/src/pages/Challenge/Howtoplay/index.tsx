import React from 'react';
import styled from 'styled-components';
import Dialog from '@components/DialogBox'
import SkipButton from '@components/Button/skip'
import { Redirect } from "react-router-dom";
import kingIcon from '@assets/challenge/kingIcon.png'
import {F0,F1,F2,F3,F4} from './Frame'

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
      frameComponent: [F0,F1,F2,F3,F4,F0],
      script: [ `ท่านคิดว่าท่านคงฝึกหนักมาน่าดูเลย ข้าจะสอนวิธีเข้าไปต่อสู้กับมังกรร้ายตัวนี้เอง`,
                `เมื่อเริ่มต้นท้าทาย ท่านจะพบกับมังกรร้ายสุดโหดที่พร้อมจะทดสอบความสามารถของท่าน`,
                `ด้านบนจะมีหมายเลขกำกับแสดงข้อปัจจุบัน โดยใน 2 ข้อแรกจะเป็นคำถามรูปแบบ 4 ตัวเลือก และใน 2 ข้อหลังจะเป็นแบบทดสอบการต่อวงจรควอนตัม`,
                `ด้านบนซ้ายจะแสดงเวลานับถอยหลัง ทุกครั้งที่เวลาลดลงหรือตอบคำถามผิด ท่านจะได้รับคะแนนได้ข้อนั้นลดลง ถึงแม้เวลาจะหมด ท่านก็ยังสามารถทำต่อได้นะ`,
                `ส่วนด้านขวาแสดงคะแนนสะสมทั้งหมดที่ท่านทำได้ในรอบนี้ คำถามแต่ละข้อจะมีคะแนนเต็มอยู่ที่ 1000 คะแนน ดังนั้นท่านสามารถทำคะแนนสูงสุดได้ที่ 4000 คะแนน`,
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