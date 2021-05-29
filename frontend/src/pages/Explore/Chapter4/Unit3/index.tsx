import React from 'react';
import styled from 'styled-components';
import background from '@assets/explore/chapter4/backgroundContent.png';
import gust from '@assets/explore/chapter4/gustIcon.png'
import qubie from '@assets/explore/qubieIcon.png'
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
                    chapter={4}
                    unit={3}
                    frameComponent={[F0,F1,F2,F3,F4,F5,F6,F7,F0]}
                    interactFrame={[F5]}
                    script={[
                        'เกตที่เหลือนั้น จะเป็นเกตชนิดที่ทำงานกับคิวบิตหลายตัว โดยจะประกอบด้วย ส่วนควบคุม (Control) และส่วนควอนตัมเกตที่เราเรียนมา',
                        `ขาควบคุมจะทำหน้าที่เหมือน โลจิกเกต คอยตรวจสอบสถานะของคิวบิตที่รับมา
                        หากตรงตามเงื่อนไข จึงจะส่งผลให้ส่วนควอนตัมเกตทำงาน`,
                        `แต่หากไม่ตรงตามเงื่อนไขของส่วนควบคุม ส่วนควอนตัมเกตก็จะไม่ทำงาน คิวบิตที่ด้านนั้นก็จะผ่านไปเฉย ๆ เสมือนไม่มีอะไรเกิดขึ้น`,
                        `เกตตัวแรกที่เราจะทำความรู้จักคือ Controlled-Not หรือ CNOT gate
                        โดยหากส่วนควบคุมรับสถานะคิวบิตเป็น |1> จะทำให้ Pauli-X gate อีกด้านทำงาน`,
                        `ต่อมาคือ Toffoli gate หรือ CCNOT gate คล้าย CNOT ที่มีส่วนควบคุมสองจุด
                        หากส่วนควบคุมทั้งสองจุดรับสถานะคิวบิตเป็น |1>  จะทำให้ Pauli-X gate ทำงาน`,
                        ``,
                        // `ต่อไป Controlled-Z gate หรือ CZ gate คล้ายกันกับ CNOT gate เพียงแต่เปลี่ยนจาก Pauli-X เป็น Pauli-Z แทน
                        // อย่าลืมว่าการหมุนแกน Z ไม่มีผลกับ |0>`,
                        // `อ๊ะ มันแปลก ๆ นะ ทำไมสัญลักษณ์ทั้งสองด้านของ Controlled-Z gate ถึงเหมือนกันล่ะ แล้วจะรู้ได้ยังไงว่าด้านไหนเป็นส่วนควบคุม`,
                        `ถามได้ดี ! นั่นก็เพราะในระบบ 0/1 Controlled-Z gate มีคุณสมบัติในการสลับตำแหน่งกัน
                        ระหว่างสองจุด เพราะฉะนั้นเธอจะให้ด้านไหนเป็นด้านควบคุมก็ได้`,
                        `สุดท้าย Controlled-Controlled-Z gate หรือ CCZ gate คล้ายกันกับ CCNOT 
                        ที่เปลี่ยนจาก Pauli-X เป็น Pauli-Z และแน่นอนว่ามีคุณสมบัติสลับตำแหน่งเช่นกัน`,
                        `เรื่องเกตเป็นเพียงเรื่องพื้นฐานของการดำเนินการกับสถานะของคิวบิต
                        เธอจะได้นำไปประยุกต์ใช้ในการคำนวณในอนาคตแน่นอน ฮ่า ฮ่า`,
                    ]}
                    icon={gust}
                    background={background}
                />
        );
    }
}

export default Unit3