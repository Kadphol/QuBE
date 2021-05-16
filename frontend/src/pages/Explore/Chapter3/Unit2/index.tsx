import React from 'react';
import styled from 'styled-components';
import background from '@assets/explore/chapter3/backgroundContent.png';
import max from '@assets/explore/chapter3/maxIcon.png'
import qubie from '@assets/explore/qubieIcon.png'
import {F0,F1,F2,F3,F4,F5} from './Frame'
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
                    chapter={3}
                    unit={2}
                    frameComponent={[F0,F1,F2,F3,F4,F5,F0]}
                    interactFrame={[F1,F2]}
                    script={[
                        `ต่อไปเราจะมาลองวัดค่าของคิวบิตกันครั่บ แต่ในโลกควอนตัมอะไรก็ไม่แน่นอน
                        ผมแนะนำให้ทดลองวัดหลาย ๆ ครั้งเพื่อความมั่นใจนะครับ`,
                        `เอาล่ะ พร้อมแล้วเรามาเริ่มทำการวัดกันเลยครับ ทุกครั้งที่ทำการวัด กระผมจะทำการบันทึกสถิติไว้เองครับ`,
                        `ต่อไป เราจะมาลองวัดคิวบิตตัวนี้ดูบ้างนะครับ`,
                        // `อ๊ะ พอทำการวัดคิวบิตตัวนี้ ผลลัพธ์มีโอกาสเป็นไปได้ทั้ง 0 และ 1 อย่างเท่า ๆ กัน`,
                        `ถูกต้องแล้วครับ นี่คือผลลัพธ์จากการวัดคิวบิตที่อยู่ในสถานะ Superposition ซึ่งอัตราส่วนระหว่าง 0 กับ 1 ก็อาจแตกต่างกันไปตามแต่ละสถานะได้ครับ`,
                        `แต่จะวัดแบบนี้ก็คงจะเสียเวลาไปสักหน่อย เราจะกำหนดจำนวนครั้งแล้ววัดในทีเดียว โดยเราจะเรียกจำนวนครั้งที่วัดนี้ว่า “ช็อต” ครับ`,
                        `ท่านสามาราถใช้การวัดแบบระบุจำนวนช็อตนี้ ลองวัดคิวบิตตัวอื่น ๆ ได้ตามสบายเลยนะครับ`,
                        `คิวบิต สถานะ Superposition เหล่านี้เป็นเพียงตัวอย่างพื้นฐานเท่านั้น ซึ่งผลลัพธ์จากการวัดจะเป็น 0 และ 1 อย่างละเท่า ๆ กันครับ`
                    ]}
                    icon={max}
                    background={background}
                />
        );
    }
}

export default Unit2