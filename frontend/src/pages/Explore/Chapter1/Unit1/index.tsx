import React from 'react';
import background from '@assets/explore/chapter1/backgroundContent.png';
import beck from '@assets/explore/chapter1/beckIcon.png';
import {F0,F1,F2,F3,F4,F5,F6,F7,F8,F9} from './Frame'
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
                    chapter={1}
                    unit={1}
                    frameComponent={[F0,F1,F2,F3,F4,F5,F6,F7,F8,F9]}
                    interactFrame={[F1]}
                    script={[
                        "นานมาแล้ว คอมพิวเตอร์ได้ถูกคิดค้นขึ้น และมีการพัฒนาออกมาในรูปแบบต่าง ๆ ให้ใช้ในชีวิตประจำวัน เพื่อเพิ่มความสะดวกสบายให้กับพวกเรา",
                        "เรามาลองทดสอบกัน เธอรู้หรือเปล่า ว่าอุปกรณ์ไหนบ้างอาศัยคอมพิวเตอร์ในการทำงาน",
                        "ถูกต้อง!",
                        "เยี่ยมมาก แล้วเธอรู้หรือเปล่า ทุกวันนี้ เราสามารถแยกประเภทของคอมพิวเตอร์ได้หลัก ๆ อยู่สองประเภทนะ",
                        `ประเภทแรกคือคอมพิวเตอร์ที่เราใช้กันตั้งแต่ยุคแรกจนถึงที่เราใช้กันอยู่ทั่วไปในทุกวันนี้ 
                        เรียกว่า Classical computer หรือ คอมพิวเตอร์แบบดั้งเดิม`,
                        `คอมพิวเตอร์แบบดั้งเดิม ทำงานด้วยระบบไฟฟ้า โดยภายในประกอบไปด้วยอุปกรณ์
                        อิเล็กทรอนิกส์ต่าง ๆ`,
                        "คราวนี้ มาดูคอมพิวเตอร์อีกประเภทกันบ้างดีกว่า",
                        `คอมพิวเตอร์ประเภทนี้เป็นคอมพิวเตอร์แห่งยุคอนาคต ที่ทีมนักวิจัยกำลังพัฒนา
                        เพื่อให้นำมาใช้จริงได้ เรียกว่า ควอนตัมคอมพิวเตอร์ (Quantum computer)`,
                        `ควอนตัมคอมพิวเตอร์ ทำงานด้วยทฤษฎีทางควอนตัมโดยใช้คุณสมบัติพิเศษต่าง ๆ 
                        ของอะตอมซึ่งทำให้เราค้นพบวิธีการใหม่ ๆ ในแบบที่คอมพิวเตอร์แบบดั้งเดิมทำไม่ได้!`,
                        `แต่ก่อนจะไปถึงควอนตัมคอมพิวเตอร์ ฉันจะพาเธอไปทำความเข้าใจหลักการทำงาน
                        ของคอมพิวเตอร์แบบดั้งเดิมกันก่อน ไปกันเถอะ`
                    ]}
                    icon={beck}
                    background={background}
                />
        );
    }
}

export default Unit1