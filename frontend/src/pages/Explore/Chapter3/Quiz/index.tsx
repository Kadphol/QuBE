import React from 'react';
import background from '@assets/explore/chapter3/backgroundQuiz.png';
import dragon from '@assets/explore/dragonIcon.png';
import qubie from '@assets/explore/qubieIcon.png';
import {F0,F1,F2,F3,F4,F5,F6,F7,F99,F100} from './Frame'
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
                    chapter={3}
                    frameComponent={[F0,F1,F2,F3,F99,F4,F99,F5,F99,F6,F7,F100]}
                    interactFrame={[F3,F4,F5]} 
                    noDialogFrame={[F99,F100]}
                    script={[
                        `บรรยากาศที่นี่ไม่เหมาะกับข้าเลย บ้าจริง`,
                        `เจอตัวเจ้ามังกรแล้ว!`,
                        `พวกเจ้าอีกแล้วรึ! คราวก่อนข้าประเมินพลังของพวกเจ้าต่ำไป แต่จะไม่มีโอกาสแบบนั้นอีกแล้ว!`,
                        `ทำไมเราจึงนิยมใช้มาตรวัด 0/1 ในการวัดคิวบิต`,
                        ``,
                        `ไหนเจ้าลองเลือกสถานะของคิวบิตและชนิดของมาตรวัด ให้ได้ผลลัพธ์ตามโจทย์ดูสิ`,
                        ``,
                        `ฮึ่ม! ข้าจะเพิ่มจำนวนคิวบิต ลองดูอีกครั้งแล้วกัน คราวนี้ยากขึ้นกว่าเดิมแน่นอน`,
                        ``,
                        `(แย่ล่ะสิ เจ้าพวกนี้เริ่มจะแข็งแกร่งขึ้นทุกครั้ง) ก็ได้ ครั้งนี้ข้าจะปล่อยพวกแกไปก่อน!`,
                        `ไหนบอกว่าจะไม่หนีแล้วไงล่ะ! อย่าหนีนะ!`,
                        ``
                    ]}
                    icon={[dragon,qubie,dragon,dragon,dragon,dragon,dragon,dragon,dragon,dragon,qubie]}
                    background={background}
                />
        );
    }
}

export default Quiz