import React from 'react';
import background from '../../../../assets/explore/chapter1/BackgroundQuiz.png';
import dragon from '../../../../assets/explore/dragonIcon.png';
import {F1,F2,F3,F4,F5,F6,F7,F8,F9} from './Frame'
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
                    frameComponent={[F1,F2]}
                    interactFrame={[-1]}
                    noDialogFrame={[0]}
                    script={[
                        `ไหนเจ้าลองบอกมาซิว่า "ควอนตัมคอมพิวเตอร์" แตกต่างจาก "คอมพิวเตอร์แบบดั้งเดิม" อย่างไร`,
                        `ไหนเจ้าลองบอกมาซิว่า "ควอนตัมคอมพิวเตอร์" แตกต่างจาก "คอมพิวเตอร์แบบดั้งเดิม" อย่างไร`,
                    ]}
                    icon={[dragon,dragon]}
                    background={background}
                />
        );
    }
}

export default Quiz