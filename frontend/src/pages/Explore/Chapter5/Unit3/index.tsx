import React from 'react';
import styled from 'styled-components';
import background from '@assets/explore/chapter5/backgroundContent.png';
import princess from '@assets/explore/chapter5/princessIcon.png'
import {F0,F1,F2,F3,F4,F5,F6,F7} from './Frame'
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
                    chapter={5}
                    unit={3}
                    frameComponent={[F0]}
                    interactFrame={[]}
                    script={[
                        `ต่อไป ฉันจะอธิบายอัลกอริทึมที่เราได้เรียนกันไปในเชิงปฏิบัติมากขึ้น และนำมาวัดประสิทธิภาพกันให้เห็นไปเลย ว่าใครจะเจ๋งกว่ากัน`,
                        `เริ่มจากเราจะสมมติว่ามีประตูทั้งหมด 8 บาน โดยมีหมายเลข 000 ไปจนถึง 111
                        และทุกครั้งที่เปิดประตูจะถือว่าใช้เวลาไป 1 หน่วยหรือ 1 Timestep`,
                        `เริ่มที่ Linear Search โดยใช้บิตทั้งหมด 3 ตัว ต่อเข้ากับวงจรตรวจสอบผลลัพธ์
                        โดยสถานะบิตจะแสดงถึงหมายเลขประตูที่เราจะเปิด และปล่อยให้ทำงานเรื่อย ๆ`,
                        `ลองมาดูกันซิว่า Linear search จะใช้เวลาในการค้นหาเท่าไหร่`,
                        `เธอจะเห็นว่าในกรณีที่แย่ที่สุดซึ่งคำตอบอยู่ประตูสุดท้าย เราอาจต้องใช้เวลามากถึง N หน่วย ในการเปิดประตูให้ครบทุกบาน`,
                        `ต่อไปมาดู Grover’s algorithm กันบ้าง เราจะตรวสอบประตูทุกบานพร้อมกัน
                        แต่ต้องเปิดทั้งหมด √8 ครั้ง ซึ่งได้ประมาณ 2 กว่า ๆ เราจะปัดเศษลงเสมอ`,
                        `ลองมาดูกันซิว่า Grover’s algorithm จะใช้เวลาในการค้นหาเท่าไหร่`,
                        `เยี่ยมไปเลย Grover’s algorithm ใช้เวลาการค้นหาแค่ √N โดยไม่สนใจว่าตำแหน่ง
                        ของคำตอบว่าจะอยู่ประตูไหน แต่ยังคงมีปัญหาเรื่องความไม่แน่นอนอยู่`,
                        `ทีนี้เราจะนำอัลกอริทึมมาประชันกัน เธอช่วยบอกได้มั้ยว่า หากเรามีจำนวนประตูต่าง ๆ
                        แล้วเราจะต้องใช้เวลาเท่าไหร่ในการทำการค้นหาผลลัพธ์ เติมลงในกราฟให้หน่อยนะ`,
                        `โอ้โห ! เมื่อดูจากกราฟนี้แล้ว ยิ่งจำนวนข้อมูลมีปริมาณมาก ๆ ความแตกต่าง
                        ของเวลาที่ใช้ก็ยิ่งต่างกันมากขึ้นเท่านั้น ! ควอนตัมคอมพิวเตอร์สุดยอด !`
                    ]}
                    icon={princess}
                    background={background}
                />
        );
    }
}

export default Unit3