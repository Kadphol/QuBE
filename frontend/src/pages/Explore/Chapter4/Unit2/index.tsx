import React from 'react';
import styled from 'styled-components';
import background from '@assets/explore/chapter4/backgroundContent.png';
import gust from '@assets/explore/chapter4/gustIcon.png'
import qubie from '@assets/explore/qubieIcon.png'
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
                    chapter={4}
                    unit={2}
                    frameComponent={[F0]}
                    interactFrame={[]}
                    script={[
                        'คราวนี้เราจะมาทำความรู้จักกับ ควอนตัมเกต แต่ละชนิดกันเลย โดยคิวบิตตั้งต้นก่อนจะผ่านควอนตัมเกต เราจะกำหนดให้มีสถานะเป็น |0> เสมอ'
                    ]}
                    icon={[gust]}
                    background={background}
                />
        );
    }
}

export default Unit2