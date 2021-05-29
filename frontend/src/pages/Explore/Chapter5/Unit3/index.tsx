import React from 'react';
import styled from 'styled-components';
import background from '@assets/explore/chapter5/backgroundContent.png';
import princess from '@assets/explore/chapter5/princessIcon.png'
import {F0,F1,F2,F3,F4,F5} from './Frame'
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
                    frameComponent={[F0,F1,F2,F3,F4,F5,F0]}
                    interactFrame={[F3,F5]}
                    script={[
                        `ต่อไป ฉันจะอธิบายอัลกอริทึมที่เราได้เรียนกันไปในเชิงปฏิบัติมากขึ้น และนำมาวัดประสิทธิภาพกันให้เห็นไปเลย ว่าใครจะเจ๋งกว่ากัน`,
                        `เริ่มจากเราจะสมมติว่ามีประตูทั้งหมด 4 บานเหมือนเดิม โดยมีหมายเลข 00 ไปจนถึง 11
                        และทุกครั้งที่เปิดประตูจะถือว่าใช้เวลาไป 1 หน่วยหรือ 1 Timestep`,
                        `เริ่มที่ Linear Search โดยใช้บิตทั้งหมด 2 ตัว ต่อเข้ากับวงจรอัลกอริทึม
                        โดยสถานะบิตจะแสดงถึงหมายเลขประตูที่เราจะเปิด และขยับค่าไปเรื่อย ๆ`,
                        `เมื่อไหร่ก็ตามที่วงจรหาเจอแล้ว จะแสดงผลลัพธ์ออกมาเป็นหมายเลขประตูที่ถูกต้อง
                        ลองมาดูกันซิว่า Linear search จะใช้เวลาในการค้นหาเท่าไหร่`,
                        // `เธอจะเห็นว่าในกรณีที่แย่ที่สุดซึ่งคำตอบอยู่ประตูสุดท้าย เราอาจต้องใช้เวลามากถึง N หน่วย ในการเปิดประตูให้ครบทุกบาน`,
                        `ต่อไปมาดู Grover’s algorithm กันบ้าง โดยใช้คิวบิต 2 ตัวเช่นเดียวกัน
                        แต่เมื่อเราทให้คิวบิตอยู่ในสถานะ Super position คิวบิตจะสามารถมีสถานะ 00 01 10 11 พร้อมกันได้ `,
                        `หลังคิวบิตผ่านเข้าวงจรอัลกอริทึม ให้ทำการวัดค่า จะได้ผลลัพธ์แสดงหมายเลขประตูที่คาดว่าเป็นคำตอบ
                        ลองมาดูกันซิว่า Grover’s algorithm จะใช้เวลาในการค้นหาเท่าไหร่`,
                        // `เยี่ยมไปเลย Grover’s algorithm ใช้เวลาทำซ้ำส่วนการค้นหาจำนวน √N ครั้งเสมอ อย่าลืมว่าถ้าหารากเหลือเศษต้องปัดทิ้งตลอดนะ !!`,
                        // `โอ้โห ! เมื่อดูจากกราฟนี้แล้ว ยิ่งจำนวนข้อมูลมีปริมาณมาก ๆ ความแตกต่าง
                        // ของเวลาที่ใช้ก็ยิ่งต่างกันมากขึ้นเท่านั้น ! ควอนตัมคอมพิวเตอร์สุดยอด !`,
                        `จากการเปรียบเทียบแล้ว อัลกอริทึมทางควอนตัมทำงานได้เรวดเร็วกว่า และหากข้อมูลมีปริมาณมาก ก็จะยิ่งช่วยประหยัดเวลาได้มากด้วย
                        ควอนตัมคอมพิวเตอร์สุดยอด! `
                    ]}
                    icon={princess}
                    background={background}
                />
        );
    }
}

export default Unit3