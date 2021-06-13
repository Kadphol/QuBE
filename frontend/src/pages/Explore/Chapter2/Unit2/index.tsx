import React from 'react';
import background from '@assets/explore/chapter2/backgroundContent.png';
import bew from '@assets/explore/chapter2/bewIcon.png';
import {F0,F1,F2,F3,F4,F5} from './Frame'
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
                    unit={2}
                    frameComponent={[F0,F1,F2,F3,F4,F5]}
                    interactFrame={[F2]}
                    script={[
                        "จากคราวก่อน ฉันได้เกริ่นถึงสถานะอื่น ๆ ของคิวบิตบนทรงกลม",
                        "เรารู้จักสถานะบนสุดกับล่างสุดของทรงกลมแล้วว่าเป็น 0 และ 1 คราวนี้ลองตรวจสอบสถานะของคิวบิตที่จุดอื่น ๆ ดูบ้าง",
                        "(คลิกที่ตำแหน่งต่าง ๆ บนทรงกลมเพื่อดูค่าสถานะของคิวบิต)",
                        "ใช่แล้ว สถานะเหล่านี้ คือ สถานะที่อยู่กึ่งกลางระหว่าง 0 และ 1 โดยแต่ละตัวสามารถเขียนอธิบายให้อยู่ในรูปของสถานะ |0> และ |1> ได้ด้วยนะ",
                        `เราอาจเรียกได้ว่า สถานะนี้เปรียบเสมือนการมีค่าเป็น 0 และ 1 ในเวลาเดียวกัน 
                        เราจึงเรียกสถานะนี้ว่า "Superposition" หรือ "การซ้อนทับของคิวบิต" นั่นเอง`,
                        "Superposition เป็นคุณสมบัติที่มีประโยชน์มาก เราจะพบได้ในควอนตัมเท่านั้น เป็นเหตุผลให้เราพัฒนาควอนตัมคอมพิวเตอร์ยังไงล่ะ",
                    ]}
                    icon={bew}
                    background={background}
                />
        );
    }
}

export default Unit1