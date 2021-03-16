import React from 'react';
import beck from '@assets/explore/chapter1/beckIcon.png';
import qubie from '@assets/explore/qubieIcon.png';
import {F0,F1,F2,F3,F4,F5} from './Frame'
import IntroTemplate from '../../IntroTemplate'

class Intro extends React.Component {

    componentWillReceiveProps = () => {
        this.forceUpdate();
    }

    render() {
        return (
                <IntroTemplate
                    chapter={1}
                    unit={0}
                    frameComponent={[F0,F1,F2,F3,F4,F5]}
                    script={[
                        ``,
                        `เรามาถึงกันแล้ว ที่นี่คือหมู่บ้านของฉันเอง`,
                        `กลับมาแล้วเหรอ คิวบี้`,
                        `นี่คือ เบ็ก เป็นผู้เชี่ยวชาญที่มีความรู้มากที่สุดในหมู่บ้านนี้`,
                        `สวัสดีท่านผู้กล้า ขอบคุณท่านมากที่ให้ความร่วมมือกับพวกเรา ขับไล่มังกรร้ายนั่น`,
                        `ก่อนจะไปต่อสู้กับมังกรร้าย ข้าพร้อมจะมอบวิชาความรู้ที่ข้ามีให้แก่ท่าน ตามข้ามาเลย`
                    ]}
                    icon={[qubie,qubie,beck,qubie,beck,beck]}
                />
        );
    }
}

export default Intro