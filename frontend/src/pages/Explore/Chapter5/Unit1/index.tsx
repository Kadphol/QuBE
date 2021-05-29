import React from 'react';
import styled from 'styled-components';
import background from '@assets/explore/chapter5/backgroundContent.png';
import princess from '@assets/explore/chapter5/princessIcon.png'
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
                    chapter={5}
                    unit={1}
                    frameComponent={[F0,F1,F2,F3,F4,F0]}
                    interactFrame={[F4]}
                    script={[
                        `ก่อนอื่น เรามาทำความรู้จักกับคำว่า อัลกอริทึม กันก่อนเถอะ อัลกอริทึม คือ กระบวนการคิดอย่างเป็นขั้นเป็นตอน เพื่อแก้ไขปัญหาบางอย่าง`,
                        `โดยเรานำกระบวนการแก้ไขปัญหานี้ไปออกแบบและสร้างเป็นวงจรในการประมวลผล
                        ตัวอย่างเช่น วงจรในการบวกเลขซึ่งเป็นส่วนหนึ่งในเครื่องคิดเลข`,
                        `ฉันจะยกตัวอย่างปัญหาพื้นฐาน นั่นคือ การค้นหาตำแหน่งของสิ่งที่เราสนใจ หรือ Searching 
                        โดยฉันจะไปแอบอยู่หลังประตูบานหนึ่งแล้วเธอจะต้องหาฉันให้เจอ`,
                        `ในคอมพิวเตอร์แบบดั้งเดิมมีเงื่อนไขว่า เธอสามารถลองเปิดประตูได้ทีละบานเท่านั้น
                        วิธีที่ง่ายที่สุดคือ ทดลองเปิดประตูไปเรื่อย ๆ เราเรียกวิธีนี้ว่า Linear Search`,
                        `ฉันจะให้เธอลองด้วยตัวเองแล้วกันนะ หาฉันให้เจอสิ`,
                        // `เยี่ยมไปเลย เธอเจอตัวฉันแล้ว ! ถึงจะใช้เวลานานหน่อย แต่ก็ได้ผลลัพธ์ที่ถูกต้อง`,
                        `อย่างไรก็ตาม นี่เป็นเพียงตัวอย่างเดียวจากอัลกอริทึมแบบดั้งเดิมที่หลากหลาย 
                        ต่อไปเราจะไปเรียนรู้อัลกอริทึมทางควอนตัมกันบ้าง`,
                    ]}
                    icon={princess}
                    background={background}
                />
        );
    }
}

export default Unit1