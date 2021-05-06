import React from 'react';
import background from '@assets/explore/chapter1/backgroundQuiz.png';
import dragon from '@assets/explore/dragonIcon.png';
import qubie from '@assets/explore/qubieIcon.png';
import {F0,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10} from './Frame'
import { Iuser } from '@src/type.modal'
import QuizTemplate from '../../QuizTemplate'

class Quiz extends React.Component<{ setUser: any, user: Iuser }> {

    componentWillReceiveProps = () => {
        this.forceUpdate();
    }

    render() {
        return (
                <QuizTemplate
                    user={this.props.user}
                    setUser={this.props.setUser}
                    chapter={1}
                    frameComponent={[F0,F1,F2,F3,F4,F9,F5,F9,F6,F9,F7,F8,F10]}
                    interactFrame={[F4,F5,F6]} 
                    noDialogFrame={[F9,F10]}
                    script={[
                        `อ๊ะนั่นไง! เจอตัวแล้ว เจ้ามังกรร้าย`,
                        `ฮึ! พวกเจ้าเป็นใคร บังอาจมารบกวนข้า`,
                        `เจ้าต่างหากที่มาทำให้ชาวบ้านเดือดร้อน เราจะจัดการแกเอง`,
                        `ถ้าคิดว่าต่อกรกับข้าได้ก็ลองดู!`,
                        `ข้อใดกล่าวถึงข้อได้เปรียบของควอนตัมคอมพิวเตอร์ได้ถูกต้อง`,
                        ``,
                        `ข้าจะทดสอบความรู้เรื่องวงจรไฟฟ้าของเจ้า ไหนลองเปิดสวิตช์ให้ได้ผลลัพธ์ตรงตามนี้ซิ`,
                        ``,
                        `งั้นเจ้าสามารถปรับสวิตช์เหล่านี้ให้หน้าจอแสดงข้อความ "BAD" ได้หรือไม่ คู่มือการแสดงผลอยู่ด้านขวามือของเจ้า`,
                        ``,
                        `ไม่คิดว่าจะมีฝีมือขนาดนี้ ฝากไว้ก่อนเถอะ`,
                        `อ๊ะ! เจ้ามังกรนั่นจะหนีไปแล้ว`,
                        ``
                    ]}
                    icon={[qubie,dragon,qubie,dragon,dragon,dragon,dragon,dragon,dragon,dragon,dragon,qubie]}
                    background={background}
                />
        );
    }
}

export default Quiz