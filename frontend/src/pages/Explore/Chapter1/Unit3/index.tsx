import React from 'react';
import background from '@assets/explore/chapter1/BackgroundContent.png';
import beck from '@assets/explore/chapter1/beckIcon.png';
import {F0,F1,F2,F3,F4,F5,F6,F7,F8,F9} from './Frame'
import { Iuser } from '@src/type.modal'
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
                    chapter={1}
                    unit={3}
                    frameComponent={[F0,F1,F2,F3,F4,F5,F6,F7,F8,F9]}
                    interactFrame={[F5]}
                    script={[
                        "เอาล่ะ อย่างที่ฉันบอกไป คราวนี้เราจะมาเรียนหน้าที่จริง ๆ ของคอมพิวเตอร์กัน",
                        "นอกจากสวิตช์และหลอดไฟที่ทำหน้าที่แสดงผลแล้ว คอมพิวเตอร์จะมีส่วนประมวลผลอยู่ซึ่งจะเป็นวงจรที่ซับซ้อนมาก",
                        "คอมพิวเตอร์ จะรับค่าจากบิตที่เราป้อนเข้าไป และนำไปประมวลผล เพื่อทำความเข้าใจว่าต้องเปิด/ปิดหลอดไฟดวงไหนกันแน่",
                        "ไหนเรามาลองปรับแต่งวงจรจากคราวที่แล้ว โดยเราจะเพิ่มแป้นพิมพ์ (A B C) และวงจรสำหรับการอ่านตัวอักษรเข้าไป",
                        "ตอนนี้ คอมพิวเตอร์สามารถเข้าใจได้แล้วว่าปุ่มที่เรากดเข้าไป ต้องนำไปแสดงผลอย่างไรเธอลองกดปุ่ม แล้วสังเกตผลลัพธ์ทางหน้าจอได้นะ",
                        "(คลิกที่ปุ่มตัวอักษร A ทางซ้ายมือ และดูผลลัพธ์)",
                        "เมื่อเรากดปุ่ม คอมพิวเตอร์จะเก็บค่าจากที่เรากดในรูปแบบบิต จากนั้นวงจรประมวลผลจะอ่านค่าบิตและนำไปควบคุมหลอดไฟให้ตรงตามปุ่มที่เรากดนั่นเอง",
                        "เราสามารถสรุปหลักการทำงานของคอมพิวเตอรได้์ โดยแบ่งออกเป็น 3 ส่วนหลัก ๆ",
                        "ส่วนที่เราป้อนคำสั่งเข้าไปเรียกว่า input ส่วนที่ทำหน้าที่ประมวลผลเรียกว่า process และส่วนที่แสดงผลลัพธ์ออกมาให้เราเรียกว่า output",
                        "ทีนี้เธอก็เข้าใจการทำงานพื้นฐานของคอมพิวเตอร์แล้ว หวังว่าเธอจะช่วยขับไล่มังกรร้ายออกไปจากหมู่บ้านของเราได้นะ",
                    ]}
                    icon={[beck, beck, beck, beck, beck, beck, beck, beck, beck, beck]}
                    background={background}
                />
        );
    }
}

export default Unit1