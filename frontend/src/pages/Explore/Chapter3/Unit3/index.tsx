import React from 'react';
import styled from 'styled-components';
import background from '@assets/explore/chapter3/backgroundContent.png';
import max from '@assets/explore/chapter3/maxIcon.png'
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
                    chapter={3}
                    unit={3}
                    frameComponent={[F0]}
                    interactFrame={[]}
                    script={[
                        'เอาล่ะ เราได้ลองทำการวัดคิวบิตแบบที่อยู่เดี่ยว ๆ ไปเรียบร้อยแล้ว ต่อไปเราจะวัดกลุ่มของคิวบิตหลายตัวกันบ้างนะครั่บ'
                    ]}
                    icon={[max]}
                    background={background}
                />
        );
    }
}

export default Unit3