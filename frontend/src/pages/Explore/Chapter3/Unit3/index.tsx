import React from 'react';
import styled from 'styled-components';
import background from '@assets/explore/chapter3/backgroundContent.png';
import max from '@assets/explore/chapter3/maxIcon.png'
import qubie from '@assets/explore/qubieIcon.png'
import {F0,F1,F2,F3,F4} from './Frame'
import { Iuser } from '../../../../type.modal'
import UnitTemplate from '../../Template/UnitTemplate'

class Unit3 extends React.Component<{ setUser: any, user: Iuser }> {

    componentWillReceiveProps = () => {
        this.forceUpdate();
    }

    render() {
        return (
                <UnitTemplate
                    user={this.props.user}
                    setUser={this.props.setUser}
                    chapter={3}
                    unit={3}
                    frameComponent={[F0,F1,F2,F3,F4,F0]}
                    interactFrame={[F3,F4]}
                    script={[
                        `เอาล่ะ เราได้ลองทำการวัดคิวบิตแบบที่อยู่เดี่ยว ๆ ไปเรียบร้อยแล้ว ต่อไปเราจะวัดกลุ่มของคิวบิตหลายตัวกันบ้างนะครั่บ`,
                        `เริ่มจากการวัดคิวบิต 2 ตัว คิวบิตแต่ละตัวจะมีสถานะหลังการวัดได้เป็น 0 และ 1 เราจะเขียนผลลัพธ์ที่เป็นไปได้ทั้งหมดของคิวบิตคู่นี้ก่อนนะครั่บ`,
                        `เราจะได้ผลลัพธ์ของการวัดคิวบิตคู่นี้จะเป็นไปได้ทั้งหมด 4 แบบ โดยค่าของผลลัพธ์จะแสดงสถานะของคิวบิตที่หนึ่ง และคิวบิตที่สองตามลำดับครั่บ`,
                        `เรามาลองวัดคิวบิตแต่ละคู่ต่อไปนี้กันเถอะครั่บ`,
                        // `ในกรณีนี้ คิวบิตแรกมีสถานะเป็น |0> เสมอและคิวบิตที่สองมีสถานะเป็น |1> เสมอ ผลลัพธ์จากการวัดคิวบิตคู่นี้จึงเป็น |01> เท่านั้นครั่บ`,
                        `เราลองมาดูคิวบิตคู่ตัวถัดไปกันบ้างนะครั่บ`,
                        // `เอ๊ะ ผลลัพธ์จากการวัดเป็นไปได้ทุกรูปแบบอย่างเท่า ๆ กันเลย`,
                        // `ถูกต้องแล้วครั่บ เนื่องจากคิวบิตทั้งสองมีสถานะ Superposition ทั้งคู่
                        // ทำให้คิวบิตแต่ละตัวมีโอกาสเป็นไปได้ทั้ง |0> และ |1> นั่นเองครั่บ`,
                        `ขอบคุณมากนะครั่บ ผมรู้สึกประทับใจอย่างยิ่งที่ยังมีคนเห็นคุณค่าของห้องสมุด
                        แห่งนี้ ผมซึ่งใจจนบรรยายไม่ถูกเลยล่ะครั่บ ฮือ ฮือ`
                    ]}
                    icon={max}
                    background={background}
                />
        );
    }
}

export default Unit3