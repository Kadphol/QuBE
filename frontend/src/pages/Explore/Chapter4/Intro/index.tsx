import React from 'react';
import gust from '@assets/explore/chapter4/gustIcon.png'
import qubie from '@assets/explore/qubieIcon.png'
import {F0,F1,F2,F3,F4,F5,F6,F7} from './Frame'
import IntroTemplate from '../../Template/IntroTemplate'

class Intro extends React.Component {

    componentWillReceiveProps = () => {
        this.forceUpdate();
    }

    render() {
        return (
                <IntroTemplate
                    chapter={4}
                    unit={0}
                    frameComponent={[F0,F1,F2,F3,F4,F5,F6,F7]}
                    script={[
                        ``,
                        `ไม่คิดเลยว่าเจ้ามังกรจะบินข้ามทะเลมาอย่างนี้ เรามาถึงเกาะของชนเผ่าริมทะเลจนได้ เล่นเอาเหนื่อยเลย `,
                        `บรรยากาศดีกว่าเมื่อกี้เยอะเลย ถ้าเป็นที่นี่คงไม่ต้องกังวลว่าจะมีอะไรโผล่มาแล้วล่ะ`,
                        `ฮึบ ! ย่าห์ !! `,
                        `เย้ยยย ! ตกใจหมดเลยค่าาา !`,
                        `โฮ่ คิวบี้นี่นา มาเที่ยวเล่นเหรอ ว่าแต่เจ้าเห็นฉลามมั้ย!?`,
                        `กัสต์นี่นา !? ว่าแต่ ฉลาม!? ไม่สิ ตอนนี้มีเรื่องด่วนกว่านั้นนะ ! มีมังกรร้ายผ่านมาแถวนี้ 
                        พวกเราต้องการความช่วยเหลือจากเธอ`,
                        `มังกรงั้นรึ? น่าสนใจนี่นา ฉันจะให้ความร่วมมือกับพวกเธอเอง ย่าห์ !`,
            ]}
                    icon={[qubie,qubie,qubie,gust,qubie,gust,qubie,gust]}
                />
        );
    }
}

export default Intro