import React from 'react';
import background from '@assets/explore/chapter2/backgroundQuiz.png';
import dragon from '@assets/explore/dragonIcon.png';
import qubie from '@assets/explore/qubieIcon.png';
import {F0,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10} from './Frame'
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
                    chapter={2}
                    frameComponent={[F0,F1,F2,F3,F4,F9,F5,F9,F6,F9,F7,F8,F10]}
                    interactFrame={[F4,F5,F6]} 
                    noDialogFrame={[F9,F10]}
                    script={[
                        `อยู่ที่นี่จริง ๆ ด้วยสินะ! เจ้ามังกรร้าย`,
                        `อะไรกัน! พวกเจ้าตามมาถึงที่นี่เชียวหรือเนี่ย!`,
                        `พวกเราก็ไม่ยอมแพ้หรอก!`,
                        `หึหึ คราวนี้เจ้าสู้ข้าไม่ได้แน่นอน`,
                        `ข้อไหนที่เป็นตัวอย่างสถานะที่เป็นไปได้ของคิวบิต?`,
                        ``,
                        `จงเลือกจุดบนทรงกลมที่มีสถานะตรงกับที่ข้ากำหนดไว้ด้านขวามือให้ถูกต้อง`,
                        ``,
                        `เจ้าสามารถสรุปสถานะของคิวบิต Q1 Q2 Q3 ตามลำดับ ที่อยู่ในสถานะพัวพันกันนี้ได้อย่างไร?`,
                        ``,
                        `อะไรกัน! พวกเจ้าไม่น่าจะมีความรู้ด้านควอนตัมคอมพิวเตอร์ขนาดนี้นี่!?`,
                        `เจ้ามังกรนั่นกำลังหนีลงไปด้านล่างแล้ว!`,
                        ``
                    ]}
                    icon={[qubie,dragon,qubie,dragon,dragon,dragon,dragon,dragon,dragon,dragon,dragon,qubie]}
                    background={background}
                />
        );
    }
}

export default Quiz