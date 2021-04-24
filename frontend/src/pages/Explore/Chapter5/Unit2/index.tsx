import React from 'react';
import styled from 'styled-components';
import background from '@assets/explore/chapter5/backgroundContent.png';
import princess from '@assets/explore/chapter5/princessIcon.png'
import {F0,F1,F2,F3,F4,F5,F6,F7} from './Frame'
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
                    frameComponent={[F0]}
                    interactFrame={[]}
                    script={[
                        `ต่อไปฉันจะแนะนำอัลกอริทึมทางควอนตัมที่น่าสนใจ มีชื่อว่า Grover’s algorithm ซึ่งเป็นอัลกอริทึมที่ใช้ในการค้นหาหรือ Searching เช่นเดียวกัน`,
                        `บนพื้นฐานของควอนตัม ได้ทำลายเงื่อนไขที่เราจำเป็นต้องเปิดประตูทีละบานทิ้งไป
                        ทำให้เราสามารถเปิดประตูทุก ๆ บานพร้อมกันได้ !`,
                        `แต่วิธีการนี้ อาจทำให้เธอไม่ได้ผลลัพธ์ที่ถูกต้องในครั้งเดียว เพื่อความแม่นยำ เธอจะต้องเปิดทั้งหมด √N ครั้ง เมื่อ N เป็นจำนวนประตู ลองดูสิ`,
                        `เธอแน่ใจนะว่าเธอนับจำนวนครั้งที่เปิดได้ถูกต้อง ? ลองใหม่อีกครั้งนะ`,
                        `เยี่ยมไปเลย ! เธอทำได้ถูกต้อง แต่ฉันมีความจริงจะบอก...
                        นั่นก็คือ จริง ๆ แล้วฉันอยู่หลังประตูบานที่ 2 !`,
                        `นั่นเป็นข้อจำกัดอย่างหนึ่งของ Grover’s algorithm แม้จะนับจำนวนครั้งถูกต้อง
                        แต่มันก็ทำได้เพียงเพิ่มความแม่นยำให้สูงสุด ซึ่งยังมีโอกาสพลาดได้อยู่ดี`,
                        `เราเรียนเรื่องการวัดกับแม็กซ์มาแล้ว เธอคงจำได้สินะว่าเราต้องทำการวัดหลายครั้ง
                        แล้วบันทึกเป็นสถิติ เพราะควอนตัมมีความไม่แน่นอน ลองดูสิ !`,
                        `เยี่ยมไปเลย ! เมื่อเราทำการสรุปผลหลายครั้ง ดูจากสถิติแล้ว ผลลัพธ์ที่ได้มี
                        ความแม่นยำสูงจริง ๆ ด้วย ถึงจะไม่ 100% ก็เถอะ`
                    ]}
                    icon={princess}
                    background={background}
                />
        );
    }
}

export default Unit2