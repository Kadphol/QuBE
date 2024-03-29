import React from 'react';
import background from '@assets/explore/chapter1/BackgroundContent.png';
import beck from '@assets/explore/chapter1/beckIcon.png';
import {F0,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14} from './Frame'
import { Iuser } from '@src/type.modal'
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
                    chapter={1}
                    unit={2}
                    frameComponent={[F0,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14]}
                    interactFrame={[F9]}
                    script={[
                        "สงสัยกันมั้ยว่า คอมพิวเตอร์แบบดั้งเดิมที่เราใช้กันอยู่ สามารถเข้าใจได้อย่างไรว่าเราป้อนค่าอะไรเข้าไปและเราต้องการให้แสดงผลอะไรออกมา",
                        "คำตอบคือ คอมพิวเตอร์ ทำการอ่านข้อมูลจากหน่วยความจำที่เก็บไว้ภายในเครื่อง โดยมีหน่วยข้อมูลที่เล็กที่สุด เรียกว่า บิต",
                        "คอมพิวเตอร์อาจจะอ่านค่าจาก บิต หลาย ๆ ตัว เพื่อนำมาแสดงค่าให้เราเห็น",
                        "เมื่อค่าของ บิต เปลี่ยนแปลงไป คอมพิวเตอร์ก็จะแสดงผลที่แตกต่างออกไปเช่นเดียวกัน",
                        "แล้ว บิต หน้าตาเป็นยังไง? คอมพิวเตอร์อ่านค่าจาก บิต ได้ยังไงกันนะ?",
                        "ภายใน Classical computer นั้นประกอบด้วยอุปกรณ์อิเล็กทรอนิกส์ตัวหนึ่ง จำนวนมากมีชื่อว่า Transistor ทำหน้าที่เหมือนสวิตช์คอยคุมว่าจะให้ไฟฟ้าไหลผ่านหรือไม่",
                        "ซึ่ง บิต ก็วัดจากสถานะทางไฟฟ้านี้เอง ถ้าไม่มีไฟฟ้าอยู่เราจะแทนสถานะของบิตด้วย 0 ",
                        "และในทางกลับกัน ถ้ามีไฟฟ้าอยู่ เราจะแทนสถานะของบิตด้วย 1 นั่นเอง",
                        "เอาล่ะ ที่เธอเห็น นี่คือตัวอย่างวงจรอย่างง่าย ฉันจะให้เธอลองคลิกเปิด/ปิดสวิตช์ แล้วเธอลองสังเกตผลลัพธ์บนหลอดไฟสิ",
                        "(คลิกเพื่อเปิด/ปิดสวิตช์ และดูผลลัพธ์)",
                        "เมื่อเธอกดสวิตช์ ไฟฟ้าก็จะไหลเข้าไป และสถานะไฟฟ้านั้นก็ทำให้ค่าบิตเปลี่ยนแปลง และทำให้หลอดไฟดวงนั้น ๆ ติดขึ้นมานั่นเอง",
                        "แต่เธออาจจะกำลังคิดว่า นี่ดูเหมือนการต่อวงจรไฟฟ้าเข้ากับหลอดไฟธรรมดา ๆ ไม่เห็นจะมีคอมพิวเตอร์ตรงไหนเลย (หลอกกันหรือเปล่า)",
                        "เราจะสมมติให้หลอดไฟเปรียบเสมือนหน้าจอของเรา ซึ่งประกอบด้วยหลอดไฟเป็นล้าน ๆ ดวง เราคงไม่เปิด/ปิดสวิตช์ทีละตัวเหมือนเดิมแล้ว (เมื่อยตายกันพอดี) ",
                        "ถ้าเราต้องการกดเพียงแค่ปุ่มเดียว แล้วจะสามารถควบคุมไฟหลาย ๆ ดวงได้ยังไง?",
                        "คำตอบนั่นก็คือ เราจะใช้คอมพิวเตอร์มาช่วยประมวลผลในส่วนนี้นั่นเอง! เยี่ยมไปเลย พระเอกของเรากำลังจะได้ออกโรงแล้ว",
                    ]}
                    icon={beck}
                    background={background}
                />
        );
    }
}

export default Unit1