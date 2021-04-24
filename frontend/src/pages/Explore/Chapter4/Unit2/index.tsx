import React from 'react';
import styled from 'styled-components';
import background from '@assets/explore/chapter4/backgroundContent.png';
import gust from '@assets/explore/chapter4/gustIcon.png'
import qubie from '@assets/explore/qubieIcon.png'
import {F0,F1,F2,F3,F4,F5,F6} from './Frame'
import { Iuser } from '../../../../type.modal'
import UnitTemplate from '../../Template/UnitTemplate'

class Unit2 extends React.Component<{ setUser: any, user: Iuser }> {

    componentWillReceiveProps = () => {
        this.forceUpdate();
    }

    render() {
        return (
                <UnitTemplate
                    user={this.props.user}
                    setUser={this.props.setUser}
                    chapter={4}
                    unit={2}
                    frameComponent={[F0,F1,F2,F3,F4,F5,F6,F0]}
                    interactFrame={[]}
                    script={[
                        'คราวนี้เราจะมาทำความรู้จักกับ ควอนตัมเกต แต่ละชนิดกันเลย โดยคิวบิตตั้งต้นก่อนจะผ่านควอนตัมเกต เราจะกำหนดให้มีสถานะเป็น |0> เสมอ',
                        `ควอนตัมเกตตัวแรกมีชื่อว่า Pauli-X gate แสดงด้วยสัญลักษณ์ตัว X ทำหน้าที่หมุนทรงกลมสถานะคิวบิตในแกน X ไป 180 องศา`,
                        `Pauli-X gate มีความสำคัญมาก มันเปรียบเสมือน NOT-gate ในโลจิกเกต
                        เพราะมันทำหน้าที่สลับสถานะของคิวบิตระหว่าง |0> และ |1> นั่นเอง`,
                        `ควอนตัมเกตตัวแรกมีชื่อว่า Pauli-Y gate และ Pauli-Z gate ทำหน้าที่คล้ายกับ Pauli-X gate เลย เพียงแค่เปลี่ยนแกนหมุนเป็นแกน Y และแกน Z เท่านั้น`,
                        `ต่อมาเป็นเกตที่สำคัญอีกเกตหนึ่ง ชื่อว่า Hardamard gate แทนสัญลักษณ์ด้วย H
                        ทำหน้าที่หมุนแกน Y เพียง 90 องศาและต่อด้วยแกน X อีก 180 องศา`,
                        `เธอเดาได้มั้ยว่าผลลัพธ์จากการหมุนคิวบิต |0> ด้วย Hardamard gate 
                        จะมีสถานะอยู่ที่ตำแหน่งไหนบนทรงกลม`,
                        `ที่ฉันบอกว่า Hardamard gate มีความสำคัญมาก ก็เพราะมันทำหน้าที่เปลี่ยนคิวบิต
                        ให้มีสถานะ Superposition แถมยังสามารถเปลี่ยนกลับได้อีกด้วยนะ ฮ่า ฮ่า`,
                        `ควอนตัมเกตทั้งหมดที่ฉันแนะนำไป เป็นเพียงควอนตัมเกตชนิดที่ทำงานด้วย
                        คิวบิตตัวเดียวเท่านั้น ต่อไปเราจะไปดูควอนตัมเกตที่เหลือกัน`
                    ]}
                    icon={gust}
                    background={background}
                />
        );
    }
}

export default Unit2