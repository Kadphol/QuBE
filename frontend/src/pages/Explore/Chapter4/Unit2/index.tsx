import React from 'react';
import styled from 'styled-components';
import background from '@assets/explore/chapter4/backgroundContent.png';
import gust from '@assets/explore/chapter4/gustIcon.png'
import qubie from '@assets/explore/qubieIcon.png'
import {F0,F1,F2,F3,F4,F5,F6,F7} from './Frame'
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
                    frameComponent={[F0,F1,F2,F3,F4,F5,F6,F7,F0]}
                    interactFrame={[F6]}
                    script={[
                        'คราวนี้เราจะมาทำความรู้จักกับ ควอนตัมเกต แต่ละชนิดกันเลย โดยคิวบิตตั้งต้นก่อนจะผ่านควอนตัมเกต เราจะกำหนดให้มีสถานะเป็น |0> เสมอ',
                        `ควอนตัมเกตตัวแรกมีชื่อว่า Pauli-X gate แสดงด้วยสัญลักษณ์ตัว X ทำหน้าที่หมุนทรงกลมสถานะคิวบิตในแกน X 
                        ไป 180 องศา`,
                        `Pauli-X gate มีความสำคัญมาก มันเปรียบเสมือน NOT-gate ในโลจิกเกต
                        เพราะนอกจากเปลี่ยนสถานะจาก |0> เป็น |1> แล้ว มันยังสามารถทำกลับได้อีกด้วย`,
                        `ตัวต่อมาอีกสองตัวนั้นคล้ายกับ Pauli-X gate ตัวแรกคือ Pauli-Y gate จะทำหน้าที่หมุนทรงกลมในแนวแกน Y
                         เธอจะเห็นว่าผลลัพธ์นั้นคล้ายกับ Pauli-X gate เลย `,
                        `และอีกตัวนั่นก็คือ Pauli-Z gate แน่นอนว่าคิวบิตจะหมุนในแนวแกน Z ซึ่งถ้าสังเกตจะพบว่าที่สถานะ |0> 
                        คิวบิตจะคงอยู่กับที่ ทำให้สถานะไม่เปลี่ยนแปลง`,
                        `ต่อมาเป็นเกตที่สำคัญอีกเกตหนึ่ง ชื่อว่า Hardamard gate แทนสัญลักษณ์ด้วย H
                        ทำหน้าที่หมุนแกน Y เพียง 90 องศาและต่อด้วยแกน X อีก 180 องศา `,
                        `เธอจะเห็นว่าเมื่อนำคิวบิต |0> ผ่าน Hardamard gate จะได้ผลลัพธ์เป็นคิวบิต |+> 
                        แล้วเธอเดาได้มั้ยว่าหากนำคิวบิต |+> ไปผ่าน Hardamard gate อีกครั้ง จะได้ผลลัพธ์เป็นอย่างไร?`,
                        `ถูกต้อง! ที่ฉันบอกว่า Hardamard gate มีความสำคัญมาก ก็เพราะมันทำหน้าที่เปลี่ยนคิวบิต
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