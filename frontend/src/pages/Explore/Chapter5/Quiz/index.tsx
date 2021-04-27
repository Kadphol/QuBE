import React from 'react';
import background from '@assets/explore/chapter5/backgroundQuiz.png';
import dragon from '@assets/explore/dragonIcon.png';
import princess from '@assets/explore/chapter5/princessIcon.png'
import {F0,F1,F2,F3,F4,F5,F6,F7,F100} from './Frame'
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
                    chapter={5}
                    frameComponent={[F0,F100]}
                    interactFrame={[]} 
                    noDialogFrame={[F100]}
                    script={[
                        `บ้าจริง เจ้าพวกนั้นมันเป็นใครกันแน่ ทำไมถึงได้แข็งแกร่งขนาดนั้น`,
                        `สภาพดูไม่ได้เลยนะ สมกับเป็นมังกรกระจอกจริง ๆ 
                        ถ้าเป็นแบบนี้ อีกไม่นานคงจะมีคนปราบแกได้แน่ ๆ `,
                        `ถูกขังอยู่แล้วยังจะทำปากเก่งอีกเหรอ สงสัยจะต้องจัดการแกก่อนซะแล้ว`,
                        `หยุดนะ!!`,
                        `ใครกัน!?`,
                        `คิวบี้ ! คิวบี้ลูกพ่อ`,
                        `ปล่อยตัวท่านพ่อของฉันเดี๋ยวนี้ ! แกไม่มีที่ให้หนีอีกแล้ว !`,
                        `นึกว่าใครที่ไหน ที่แท้ก็เจ้าพวกตัวป่วนที่คอยขัดขวางข้านี่เอง ! 
                        ตามสัญญาข้าจะใช้ทุกอย่างที่มีเพื่อจัดการพวกเจ้า`,
                        `ถ้าคิดว่าแน่จริง ก็ลองตามจับข้าให้ได้ภายใน 3 ครั้งสิ ! แต่เจ้าจะต้องใช้วิธีการเปิดทีละบานแบบ Linear Search เท่านั้นนะ !`,
                        ``,
                        `หากข้าซ่อนอยู่หลังประตูบานใดบานหนึ่งจากทั้งหมด 32 บาน เจ้าจะต้องใช้เวลาเท่าไหร่ในการค้นหาด้วย Grover’s Algorithm `,
                        ``,
                        `สุดท้ายแล้ว ! ข้าจะหลบอยู่หลังประตูบานใดบานหนึ่งใน 3 บานนี้ แต่มีเงื่อนไขว่า
                        เจ้ามีโอกาสเพียงครั้งเดียวในเปิดประตูและตอบว่าข้าอยู่ที่ไหน หึหึ เจ้าจะทำยังไง`,
                        ``,
                        `ไม่นะ ข้า.. ข้าแพ้แล้ววว`,
                        `เจ้ามังกรหมดฤทธิ์แล้ว ! พวกเราทำสำเร็จแล้ววว !!!`,
                        `ท่านพ่อ ! ลูกมาช่วยแล้ว `,
                        `โอ้ คิวบี้ลูกรัก และท่านคงเป็นผู้ที่ให้การช่วยเหลือคิวบี้มาโดยตลอด ข้าขอขอบคุณท่านจากใจจริง`,
                        `ขอขอบคุณเธอมากจริง ๆ เลยนะ ถ้าไม่ได้เธอช่วยปราบเจ้ามังกรร้าย พวกเราคงจะต้องแย่แน่ ๆ เท่านี้ทุกอย่างก็จบลงเสียที`,
                        `แย่แล้ว !! จริง ๆ แล้ว มังกรที่จับพ่อมา ไม่ใช่เจ้ามังกรอ้วนตัวนี้หรอกนะ แต่เป็นมังกรสีดำ ตัวใหญ่ยักษ์ และดุร้ายมาก นี่เป็นเพียงลูกน้องของมันเท่านั้น`,
                        `อะไรนะ !?`,
                        `หลังจากฟื้นฟูดินแดนของเรา เราจะจัดกองทัพเพื่อไปปราบมังกรร้ายนั่นให้สิ้นซาก ดินแดนของเราจะได้ไม่โดนพวกมันทำร้ายได้อีก`,
                        `เพราะอย่างนั้นแหละ ข้าอยากขอร้องให้ท่านผู้กล้าช่วยเหลือเราอีกสักครั้ง ร่วมมือกับพวกเราด้วยเถอะ เพื่อปกป้องดินแดนของพวกเรา`,
                        `เธอไม่ต้องกังวลนะ ที่นี่มีสนามฝึกซ้อมที่เต็มไปด้วยอุปกรณ์และเครื่องมือครบครัน เธอสามารถเรียนรู้และทดลองวงจรควอนตัมและอัลกอริทึมต่าง ๆ ได้เต็มที่เลย`,
                        ``
                    ]}
                    icon={[princess]}
                    background={background}
                />
        );
    }
}

export default Quiz