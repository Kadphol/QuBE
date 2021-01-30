import React from 'react';
import styled from 'styled-components';
import background from '../../../../assets/explore/chapter2/BackgroundContent.png';
import bew from '../../../../assets/explore/chapter2/bewIcon.png';
import {F0} from './Frame'
import { Iuser } from '../../../../type.modal'
import UnitTemplate from '../../UnitTemplate'

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
                    unit={0}
                    frameComponent={[F0]}
                    interactFrame={[-1]}
                    script={[
                        "Coming Soon",
                        "เอาล่ะ เธอรู้อยู่แล้วใช่มั้ย ว่า บิต ใน Classical computer หมายถึงหน่วยที่เล็กที่สุดของข้อมูล ที่คอมพิวเตอร์อ่านได้จากสถานะทางไฟฟ้า",
                        "แต่สำหรับ  Quantum computer เราจะเรียกหน่วยนี้ว่า ควอนตัมบิต หรือ คิวบิต",
                        "บิต แบบดั้งเดิม จะมีสถานะเป็นไปได้แค่ 2 ค่า คือ 0 และ 1 เท่านั้น",
                        "แต่ คิวบิต แตกต่างจากนั้นมาก เนื่องจากอาศัยทฤษฎีทางควอนตัม ทำให้มีสถานะได้มากกว่า 0 และ 1",
                        "เราจะแทนสถานะของ คิวบิต ด้วยทรงกลม โดยแต่ละจุดบนทรงกลม เทียบได้กับสถานะหนึ่งของคิวบิต",
                        "ใช่แล้ว คิวบิต สามารถมีสถานะได้นับไม่ถ้วนเลยล่ะ",
                        "โดยที่จุดบนสุดและจุดล่างสุด คือจุดที่คิวบิตมีสถานะเป็น 0 และ 1 เหมือนกับบิตแบบดั้งเดิมนั่นแหละ",
                        "เราจะเขียนสัญลักษณ์แบบนี้เพื่อสื่อถึงคิวบิต นี่คือตัวอย่างของคิวบิตที่มีค่าเป็น 0 และ 1",
                        "แล้วที่จุดอื่น ๆ คิวบิตมีสถานะอะไรล่ะ? ฉันจะสอนเธอในหน่วยต่อไปเอง"
                    ]}
                    icon={[bew, bew, bew, bew, bew, bew, bew, bew, bew]}
                    background={background}
                />
        );
    }
}

export default Unit1