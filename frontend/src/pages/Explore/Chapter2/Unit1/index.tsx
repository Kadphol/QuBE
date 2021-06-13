import React from 'react';
import background from '@assets/explore/chapter2/BackgroundContent.png';
import bew from '@assets/explore/chapter2/bewIcon.png';
import {F0,F1,F2,F3,F4,F5,F6,F7,F8} from './Frame'
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
                    chapter={2}
                    unit={1}
                    frameComponent={[F0,F1,F2,F3,F4,F5,F6,F7,F8]}
                    interactFrame={[F5]}
                    script={[
                        "เอาล่ะ เธอรู้อยู่แล้วใช่มั้ย ว่า บิต ใน Classical computer หมายถึงหน่วยที่เล็กที่สุดของข้อมูล ที่คอมพิวเตอร์อ่านได้จากสถานะทางไฟฟ้า",
                        `แต่สำหรับควอนตัมคอมพิวเตอร์ เราจะเรียกหน่วยนี้ว่า "ควอนตัมบิต" หรือ "คิวบิต"`,
                        "“บิต” แบบดั้งเดิม ซึ่งอ่านค่าจากสถานะของไฟฟ้า จะมีสถานะที่เป็นไปได้เพียงแค่ 0 และ 1 เท่านั้น",
                        "เราสามารถแทนสถานะของ “บิต” เปรียบได้กับเส้นตรงที่มีปลายสองด้านโดยด้านหนึ่งหมายถึงสถานะ 0 และด้านหนึ่งหมายถึงสถานะ 1",
                        "แต่สำหรับควอนตัม เราจะแทนสถานะของ “คิวบิต” ด้วยทรงกลมโดยแต่ละจุดบนทรงกลมเทียบได้กับสถานะหนึ่งของคิวบิต",
                        "เธอลองเดาดูสิว่า สถานะคิวบิต สามารถเป็นไปได้ทั้งหมดกี่ค่า",
                        "ใช่แล้ว คิวบิต สามารถมีสถานะได้นับไม่ถ้วนเลยล่ะ",
                        "โดยที่จุดบนสุดและจุดล่างสุด คือจุดที่คิวบิตมีสถานะเป็น 0 และ 1 เหมือนกับบิตแบบดั้งเดิมนั่นแหละ",
                        "แล้วที่จุดอื่น ๆ คิวบิตมีสถานะอะไรล่ะ? ฉันจะสอนเธอในหน่วยต่อไปเอง",
                    ]}
                    icon={bew}
                    background={background}
                />
        );
    }
}

export default Unit1