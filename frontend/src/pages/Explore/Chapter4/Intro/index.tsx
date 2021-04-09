import React from 'react';
import gust from '@assets/explore/chapter4/gustIcon.png'
import qubie from '@assets/explore/qubieIcon.png'
import {F0,F1,F2,F3,F4,F5,F6,F7} from './Frame'
import IntroTemplate from '../../Template/IntroTemplate'

class Intro extends React.Component {

    componentWillReceiveProps = () => {
        this.forceUpdate();
    }

    render() {
        return (
                <IntroTemplate
                    chapter={4}
                    unit={0}
                    frameComponent={[F0]}
                    script={['555']}
                    icon={[gust]}
                />
        );
    }
}

export default Intro