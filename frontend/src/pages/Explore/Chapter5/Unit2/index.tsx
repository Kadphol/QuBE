import React from 'react';
import styled from 'styled-components';
import background from '@assets/explore/chapter5/backgroundContent.png';
import princess from '@assets/explore/chapter5/princessIcon.png'
import {F0,F1,F2,F3,F4,F5,F6,F7} from './Frame'
import { Iuser } from '../../../../type.modal'
import UnitTemplate from '../../Template/UnitTemplate'

class Unit2 extends React.Component<{ setUser: any, user: Iuser }> {

    componentWillReceiveProps = () => {
        this.forceUpdate();
    }

    render() {
        return (
                <UnitTemplate
                    user={this.props.user}
                    setUser={this.props.setUser}
                    chapter={5}
                    unit={2}
                    frameComponent={[F0]}
                    interactFrame={[]}
                    script={[
                        `ต่อไปฉันจะแนะนำอัลกอริทึมทางควอนตัมที่น่าสนใจ มีชื่อว่า Grover’s algorithm ซึ่งเป็นอัลกอริทึมที่ใช้ในการค้นหาหรือ Searching เช่นเดียวกัน`
                    ]}
                    icon={[princess]}
                    background={background}
                />
        );
    }
}

export default Unit2