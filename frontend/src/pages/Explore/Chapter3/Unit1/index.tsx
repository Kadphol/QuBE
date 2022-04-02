import React from 'react';
import styled from 'styled-components';
import background from '@assets/explore/chapter3/backgroundContent.png';
import max from '@assets/explore/chapter3/maxIcon.png'
import qubie from '@assets/explore/qubieIcon.png'
import {F0,F1,F2,F3,F4} from './Frame'
import { Iuser } from '../../../../type.modal'
import UnitTemplate from '../../Template/UnitTemplate'

class Unit1 extends React.Component<{ setUser: any, user: Iuser }> {

    componentWillReceiveProps = () => {
        this.forceUpdate();
    }

    render() {
        return (
                <UnitTemplate
                    user={this.props.user}
                    setUser={this.props.setUser}
                    chapter={3}
                    unit={1}
                    frameComponent={[F0,F1,F2,F3,F4,F0]}
                    interactFrame={[F3]}
                    script={[
                        'เราทราบกันดีว่า คิวบิต มีสถานะที่ซับซ้อน เราจึงทำการวัดเพื่อทำให้สามารถใช้ประโยชน์จากคิวบิตได้ง่ายขึ้นนะครับ',
                        `โดยขั้นตอนการวัดนั้นก็ไม่ยากครับ เริ่มจากเราต้องเลือกอุปกรณ์ในการวัด นั่นก็คือ มาตรวัด หรือ Basis ก่อนครับ`,
                        `มาตรวัดแต่ละแบบ จะให้ผลลัพธ์ที่แตกต่างกันตามชุดของค่าสถานะที่แสดง อาจจะมี 2 ค่า, 4 ค่า หรือมากกว่านั้น 
                        และค่าในชุดนั้นมีค่าตรงข้ามกันเป็นคู่ ๆ ครับ`,
                        `เพื่อให้เห็นภาพมากขึ้น ลองเลือกมาตรวัดตัวอย่าง แล้วสังเกตตำแหน่งบนทรงกลมสถานะคิวบิตได้เลยครับ`,
                        // `อืม.. มีมาตรวัดหลากหลายรูปแบบจริง ๆ ด้วย แล้วเราควรจะเลือกใช้มาตรวัดไหนล่ะ`,
                        `ครับ สำหรับมาตรวัดที่เราจะพูดถึงต่อจากนี้ทั้งหมด จะเป็นมาตรวัด 0/1 ครับ
                        เนื่องจากผลลัพธที่ได้จากการวัดนั้น ตรงกับค่าสถานะของ บิตแบบดั้งเดิม ครับ`,
                        `เมื่อเรารู้ว่าสามารถเปลี่ยน คิวบิต ให้เป็น บิตแบบดั้งเดิม ได้ เราก็จะสามารถนำไปใช้ในการคำนวณได้อีกมากมายมหาศาลเลยครับ`
                    ]}
                    icon={max}
                    background={background}
                />
        );
    }
}

export default Unit1