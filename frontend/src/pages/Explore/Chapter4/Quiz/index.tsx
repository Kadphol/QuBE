import React from 'react';
import background from '@assets/explore/chapter4/backgroundQuiz.png';
import dragon from '@assets/explore/dragonIcon.png';
import qubie from '@assets/explore/qubieIcon.png';
import {F0,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F99,F100} from './Frame'
import { Iuser } from '../../../../type.modal'
import QuizTemplate from '../../Template/QuizTemplate'

class Quiz extends React.Component<{ setUser: any, user: Iuser }> {

    componentWillReceiveProps = () => {
        this.forceUpdate();
    }

    render() {
        return (
                <QuizTemplate
                    user={this.props.user}
                    setUser={this.props.setUser}
                    chapter={4}
                    frameComponent={[F0,F1,F2,F3,F4,F5,F99,F6,F99,F7,F99,F8,F9,F10,F100]}
                    interactFrame={[F5,F6,F7]} 
                    noDialogFrame={[F99,F100]}
                    script={[
                        `เอ๊ะ! อะไรน่ะ? มีอะไรกำลังโผล่ขึ้นมาจากน้ำตรงนั้น ?!`,
                        `(บุ๋งๆ)`,
                        `แย่ล่ะสิ พลาดท่าบินตกลงมากลางทะเลซะได้`,
                        `ดีล่ะ ! ใช้โอกาสนี้ จัดการเจ้ามังกรร้ายที่นี่ซะเลย`,
                        `อย่ามาดูถูกกันนะ ! ข้าไม่ยอมหรอก !`,
                        `เจ้าจงเลือกต่อโลจิกเกตต่อไปนี้ เพื่อให้ได้ผลลัพธ์ที่ถูกต้องตามที่กำหนดไว้`,
                        ``,
                        `ถ้าอย่างนั้น เจ้ารู้รึเปล่าว่าเกตในข้อใดมีคุณสมบัติในการสลับตำแหน่ง
                        ระหว่างด้านควบคุมกับอีกด้านได้`,
                        ``,
                        `วงจรนี้ซับซ้อนมาก ! จงบอกผลลัพธ์จากการต่อคิวบิตเข้ากับวงจรดังภาพ`,
                        ``,
                        `มันจบแล้ว หมดเวลาเล่นแล้วเจ้ามังกร ฉันจะไม่ยอมให้แกหนีไปไหนได้อีกทั้งนั้น`,
                        `ฮึ่ม ข้าก็เบื่อเต็มทนแล้ว ต่อไปจะเป็นการต่อสู้ครั้งสุดท้ายระหว่างข้ากับเจ้า`,
                        `เดี๋ยวสิ ไม่นะ ! ทางนั้นมัน ...!?`,
                        ``
                    ]}
                    icon={[qubie,dragon,dragon,qubie,dragon,dragon,dragon,dragon,dragon,dragon,dragon,qubie,dragon,qubie]}
                    background={background}
                />
        );
    }
}

export default Quiz