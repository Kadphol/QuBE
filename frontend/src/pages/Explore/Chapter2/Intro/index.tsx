import React from 'react';
import bew from '@assets/explore/chapter2/bewIcon.png';
import qubie from '@assets/explore/qubieIcon.png';
import {F0,F1,F2,F3,F4,F5,F6,F7,F8} from './Frame'
import IntroTemplate from '../../Template/IntroTemplate'

class Intro extends React.Component {

    componentWillReceiveProps = () => {
        this.forceUpdate();
    }

    render() {
        return (
                <IntroTemplate
                    chapter={2}
                    unit={0}
                    frameComponent={[F0,F1,F2,F3,F4,F5,F6,F7,F8]}
                    script={[
                        ``,
                        `ที่นี่คือ หมู่บ้านท้องฟ้าควอนตัม ต่อจากนี้ไป มังกรนั่นต้องใช้ความรู้ด้านควอนตัมคอมพิวเตอร์ในการจัดการพวกเราแน่ ๆ`,
                        `นี่พวกเธอเป็นใครกัน มีธุระอะไรที่นี่กันยะ`,
                        `อ๊ะ! นั่นบิว สาวสวยประจำหมู่บ้านท้องฟ้านี่นา`,
                        `แหม! นึกว่าใครที่ไหน ที่แท้ก็คิวบี้นี่เอง ลมอะไรหอบเธอมาที่นี่ล่ะ เข้ามาด้านในก่อนสิ`,
                        `แย่แล้วล่ะบิว! มีมังกรร้ายต้องการจะมาทำลายหมู่บ้านนี้`,
                        `มังกรร้ายเหรอ!? แล้วหน้าตาเป็นยังไง หล่อรึเปล่า ♥`,
                        `หน้าตา!? ไม่ใช่แบบนั้นสิ เราต้องอาศัยความรู้ควอนตัมของเธอ ช่วยเราหน่อยนะ`,
                        `เข้าใจแล้ว ฉันจะสอนความรู้ที่ฉันมีให้พวกเธอเอง`
                    ]}
                    icon={[qubie,qubie,bew,qubie,bew,qubie,bew,qubie,bew]}
                />
        );
    }
}

export default Intro