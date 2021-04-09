import React from 'react';
import background from '@assets/explore/chapter4/backgroundQuiz.png';
import dragon from '@assets/explore/dragonIcon.png';
import qubie from '@assets/explore/qubieIcon.png';
import {F0,F1,F2,F3,F4,F5,F6,F7,F100} from './Frame'
import { Iuser } from '../../../../type.modal'
import QuizTemplate from '../../Template/QuizTemplate'

class Quiz extends React.Component<{ setUser: any, user: Iuser }> {

    componentWillReceiveProps = () => {
        this.forceUpdate();
    }

    render() {
        return (
                <QuizTemplate
                    user={this.props.user}
                    setUser={this.props.setUser}
                    chapter={4}
                    frameComponent={[F0,F100]}
                    interactFrame={[]} 
                    noDialogFrame={[F100]}
                    script={[
                        `อยู่ที่นี่จริง ๆ ด้วยสินะ! เจ้ามังกรร้าย`,
                    ]}
                    icon={[qubie]}
                    background={background}
                />
        );
    }
}

export default Quiz