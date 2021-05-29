import React from 'react';
import styled from 'styled-components';
import background from '@assets/explore/chapter4/backgroundContent.png';
import gust from '@assets/explore/chapter4/gustIcon.png'
import qubie from '@assets/explore/qubieIcon.png'
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
                    chapter={4}
                    unit={1}
                    frameComponent={[F0,F1,F2,F3,F4,F5,F6,F0]}
                    interactFrame={[F5]}
                    script={[
                        `เรารู้กันดีว่าบิตและคิวบิตมีสถานะต่าง ๆ ที่สามาถปรับเปลี่ยนได้ แต่ในทางปฏิบัติแล้วเราปรับเปลี่ยนสถานะอย่างไรกันล่ะ ?`,
                        `ตลอดที่ผ่านมาเรารู้ว่าหากบิตหรือคิวบิตผ่านระบบหรือวงจรบางอย่าง บิตหรือคิวบิตนั้นก็จะมีสถานะที่เปลี่ยนไปได้ `,
                        `แท้จริงแล้วภายในวงจรบางอย่างนั้นประกอบไปด้วย เกต (Gate) ซึ่งเป็นเสมือนประตูตามชื่อ 
                        โดยจะทำการดำเนินการบางอย่างกับบิตหรือคิวบิตที่ผ่านเข้าไป`,
                        `เกตสำหรับบิตแบบดั้งเดิมเรียกว่า โลจิกเกต และเกตสำหรับคิวบิตเรียกว่า ควอนตัมเกต ซึ่งทั้งสองอย่างนี้ทำงานแตกต่างกันมาก`,
                        `โลจิกเกตนั้น ทำหน้าที่ตรวจสอบสถานะของบิตที่ได้รับและส่งสถานะใหม่ออกมา
                        ตามหน้าที่ของแต่ละเกต เช่น NOT-gate จะส่งสถานะตรงข้ามกับบิตที่ไ่ด้รับ`,
                        `ตารางค่าความจริง จะแสดงผลลัพธ์ที่เกตจะส่งออกมา เทียบกับสถานะบิตที่ได้รับ 
                        เธอพอจะบอกได้มั้ยว่า ค่าสถานะผลลัพธ์ของวงจรนี้คืออะไร?`,
                        `แต่ ควอนตัมเกต ทำงานต่างออกไป เรารู้ว่าสถานะของคิวบิตแสดงได้ด้วยทรงกลม ควอนตัมเกต ทำหน้าที่หมุนทรงกลมนั้น ทำให้สถานะของคิวบิตเปลี่ยนแปลงไปด้วย`,
                        `รายละเอียดสำหรับควอนตัมเกต ฉันจะอธิบายให้เธอฟังในหน่วยถัด ๆ ไปแล้วกัน`
                    ]}
                    icon={gust}
                    background={background}
                />
        );
    }
}

export default Unit1