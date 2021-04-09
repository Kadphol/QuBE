import React from 'react';
import styled from 'styled-components';
import background from '@assets/explore/chapter5/backgroundContent.png';
import princess from '@assets/explore/chapter5/princessIcon.png'
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
                    chapter={5}
                    unit={3}
                    frameComponent={[F0]}
                    interactFrame={[]}
                    script={[
                        `ต่อไป ฉันจะอธิบายอัลกอริทึมที่เราได้เรียนกันไปในเชิงปฏิบัติมากขึ้น และนำมาวัดประสิทธิภาพกันให้เห็นไปเลย ว่าใครจะเจ๋งกว่ากัน`
                    ]}
                    icon={[princess]}
                    background={background}
                />
        );
    }
}

export default Unit3