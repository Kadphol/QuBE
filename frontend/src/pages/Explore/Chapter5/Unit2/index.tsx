import React from 'react';
import styled from 'styled-components';
import background from '@assets/explore/chapter5/backgroundContent.png';
import princess from '@assets/explore/chapter5/princessIcon.png'
import {F0,F1,F2,F3,F4,F5,F6} from './Frame'
import { Iuser } from '../../../../type.modal'
import UnitTemplate from '../../Template/UnitTemplate'

class Unit2 extends React.Component<{ setUser: any, user: Iuser }> {

    componentWillReceiveProps = () => {
        this.forceUpdate();
    }

    render() {
        return (
                <UnitTemplate
                    user={this.props.user}
                    setUser={this.props.setUser}
                    chapter={5}
                    unit={2}
                    frameComponent={[F0,F1,F2,F3,F4,F5,F6,F0]}
                    interactFrame={[F3,F6]}
                    script={[
                        `ต่อไปฉันจะแนะนำอัลกอริทึมทางควอนตัมที่น่าสนใจ มีชื่อว่า Grover’s algorithm ซึ่งเป็นอัลกอริทึมที่ใช้ในการค้นหาหรือ Searching เช่นเดียวกัน`,
                        `บนพื้นฐานของควอนตัม ลืมวิธีการเดิมได้เลย เพราะเราสามารถเปิดประตูทุก ๆ บานพร้อมกันได้ ! 
                        แต่แลกมาด้วยความแม่นยำที่ลดลง อาจทำให้เธอสับสนได้`,
                        `ฉันจะลองไปซ่อนตัวอีกครั้ง คราวนี้เธอลองค้นหาฉันด้วย Grover's algorithm ดูบ้าง`,
                        `การที่จะใช้อัลกอริทึมนี้ เธอจำเป็นต้องเพิ่มความแม่นยำโดยจะต้องเปิดประตูทั้งหมด √N ครั้ง เมื่อ N เป็นจำนวนประตู 
                        จึงจะหาคำตอบได้ ลองดูสิ`,
                        // `เธอแน่ใจนะว่าเธอนับจำนวนครั้งที่เปิดได้ถูกต้อง ? ลองใหม่อีกครั้งนะ`,
                        // `เยี่ยมไปเลย ! เธอทำได้ถูกต้องตามหลักการของ Grover's algorithm เลย`,
                        ` แต่ฉันมีบางอย่างจะบอกเธอ.. ความจริงแล้วแล้วฉันอยู่หลังประตูบานนี้ต่างหาก !`,
                        `นั่นเป็นข้อจำกัดอย่างหนึ่งของ Grover’s algorithm แม้จะนับจำนวนครั้งถูกต้อง
                        แต่มันก็ทำได้เพียงเพิ่มความแม่นยำให้สูงสุด ซึ่งยังมีโอกาสพลาดได้อยู่ดี`,
                        `เราเรียนเรื่องการวัดกับแม็กซ์มาแล้ว เธอคงจำได้สินะว่าเราต้องทำการวัดหลายครั้ง
                        แล้วบันทึกเป็นสถิติเพราะควอนตัมมีความไม่แน่นอน ลองทำสัก 5 ครั้ง ก่อนสรุปคำตอบสิ!`,
                        // `เยี่ยมไปเลย ! เมื่อเราทำการสรุปผลหลายครั้ง ดูจากสถิติแล้ว ผลลัพธ์ที่ได้มี
                        // ความแม่นยำสูงจริง ๆ ด้วย ถึงจะไม่เต็ม 100% ก็เถอะ`,
                        `เธอเข้าใจแล้วสินะว่าควอนตัมมีความพิเศษมาก แต่ก็อาจมีปัญหาเรื่องความแม่นยำที่ไม่มากพอ
                        นั่นจึงเป็นเหตุผลที่ทำให้นักวิจัยต้องพัฒนาต่อนั่นเอง`
                    ]}
                    icon={princess}
                    background={background}
                />
        );
    }
}

export default Unit2