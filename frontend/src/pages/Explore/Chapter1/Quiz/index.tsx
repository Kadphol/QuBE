import React from 'react';
import background from '../../../../assets/explore/chapter1/BackgroundQuiz.png';
import dragon from '../../../../assets/explore/dragonIcon.png';
import {F0,F1,F2, F3} from './Frame'
import { Iuser } from '../../../../type.modal'
import QuizTemplate from '../../QuizTemplate'

class Quiz extends React.Component<{ setUser: any, user: Iuser }> {

    componentWillReceiveProps = () => {
        this.forceUpdate();
    }

    render() {
        return (
                <QuizTemplate
                    user={this.props.user}
                    setUser={this.props.setUser}
                    chapter={1}
                    frameComponent={[F0,F3,F1,F3,F2,F3]}
                    interactFrame={[0,1,2,3,4,5]}
                    noDialogFrame={[1,3,5]}
                    script={[
                        `ข้อใดถูกต้อง`,
                        ``,
                        `ข้อใดถูกต้อง`,
                        ``,
                        `ข้อใดถูกต้อง`,
                        ``,
                    ]}
                    icon={[dragon, dragon, dragon, dragon, dragon, dragon]}
                    background={background}
                />
        );
    }
}

export default Quiz