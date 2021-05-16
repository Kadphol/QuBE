import React from 'react';
import max from '@assets/explore/chapter3/maxIcon.png'
import qubie from '@assets/explore/qubieIcon.png'
import {F0,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10} from './Frame'
import IntroTemplate from '../../Template/IntroTemplate'

class Intro extends React.Component {

    componentWillReceiveProps = () => {
        this.forceUpdate();
    }

    render() {
        return (
                <IntroTemplate
                    chapter={3}
                    unit={0}
                    frameComponent={[F0,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10]}
                    script={[``,
                            `รู้สึกเหมือนจะไม่มีใครอยู่มานานมากแล้ว บรรยากาศวังเวงยังไงก็ไม่รู้...`,
                            `สวัสดีครับ! ท่านนักเดินทาง!`,
                            `เย้ย! ตกใจหมดเลย! นายเป็นใคร โผล่มาจากไหนกันเนี่ย!?`,
                            `กระผมมีชื่อว่าแม็กซ์ เป็นผู้ดูแลห้องสมุดที่ถูกลืมแห่งนี้ครับ`,
                            `เอ๊ะ หรือว่าคุณจะเป็นบรรณารักษ์ชื่อดังคนนั้น ที่ว่ากันว่าสามารถจดจำเนื้อหาในหนังสือที่เคยอ่านได้ทุกเล่ม`,
                            `ใช่แล้วครั่บ กระผมเฝ้ารออยู่ที่นี่มานาน เพื่อรอใครสักคนที่จะมาใช้บริการสถานที่นี้อีกสักครั้ง`,
                            `จนกระทั่งได้พบกับพวกเธอ กระผมรู้สึกซึ้งใจจนบรรยายเป็นคำพูดไม่ถูกเลยล่ะครั่บ ฮือ ฮือ`,
                            `(ร้องไห้ทำไมล่ะเนี่ย) เอาเป็นว่า พอดีเลย เราคงต้องรบกวนคุณหน่อยแล้วล่ะ`,
                            `เข้าใจแล้วครับ ตามกระผมมาได้เลยครับ`,
                            `(หายตัว!!?)`]}
                    icon={[max,qubie,max,qubie,max,qubie,max,max,qubie,max,qubie]}
                />
        );
    }
}

export default Intro