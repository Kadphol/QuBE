import React from 'react';
import background from '../../../../assets/explore/chapter1/BackgroundContent.png';
import beck from '../../../../assets/explore/chapter1/beckIcon.png';
import {F0,F1,F2,F3,F4,F5,F6,F7,F8,F9} from './Frame'
import { Iuser } from '../../../../type.modal'
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
                    frameComponent={[F0]}
                    interactFrame={[1]}
                    script={[
                        "Coming Soon",
                    ]}
                    icon={[beck, beck, beck, beck, beck, beck, beck, beck, beck, beck]}
                    background={background}
                />
        );
    }
}

export default Unit1