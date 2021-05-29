import React from 'react';
import background from '@assets/explore/chapter2/BackgroundContent.png';
import bew from '@assets/explore/chapter2/bewIcon.png';
import {F0,F1,F2,F3,F4,F5,F6} from './Frame'
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
                    unit={3}
                    frameComponent={[F0,F1,F2,F3,F4,F5,F6]}
                    interactFrame={[F4]}
                    script={[
                        `ต่อไปเป็นบทเรียนสุดท้ายแล้ว ซึ่งเป็นคุณสมบัติพิเศษอีกหนึ่งข้อของ "คิวบิต"`,
                        "แน่นอนว่าการใช้งานควอนตัมคอมพิวเตอร์ เราไม่ได้ใช้ คิวบิต เพียงแค่ตัวเดียว แต่ต้องการหลาย ๆ คิวบิตมาทำงานร่วมกันเป็นระบบ",
                        "สมมติว่าเรานำคิวบิตหลายตัวมาทำงานร่วมกัน โดยที่คิวบิตแต่ละตัวก็มีสถานะของตัวมันเอง คงไม่แปลกอะไรใช่มั้ยล่ะ",
                        "แต่เราจะลองนำคิวบิตสองตัวมาผ่านเทคนิคบางอย่าง ซึ่งจะทำให้คิวบิตทั้งสองตัวมีความสัมพันธ์กันเป็นระบบ และไม่เป็นอิสระในตัวเองอีกต่อไป",
                        `ยกตัวอย่างในกรณีนี้ ความสัมพันธ์ของคิวบิตจะทำให้คิวบิตทั้งสองตัวมีสถานะตรงกันข้ามกันเสมอ ลองดูสิ`,
                        "ใช่แล้ว ดังนั้นเมื่อคิวบิตอยู่ในสถานะพัวพันเชิงควอนตัม เราจะไม่สามารถพิจารณาคิวบิตทั้งสองตัวแบบแยกกันได้อีกต่อไป แต่จะต้องพิจารณาทั้งก้อนแทน",
                        `แถมหากคิวบิตทั้งสองอยู่ในสถานะพัวพันกันแล้ว ไม่ว่าจะถูกจับแยกกันไกลแค่ไหนก็ยังสามารถรักษาสภาพความสัมพันธ์นี้ไว้ได้ โรแมนติกสุด ๆ ไปเลยใช่มั้ยล่ะ ♥`
                    ]}
                    icon={bew}
                    background={background}
                />
        );
    }
}

export default Unit1