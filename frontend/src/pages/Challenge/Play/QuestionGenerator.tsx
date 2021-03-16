

import React from 'react';
import styled from 'styled-components'
import dragonIcon from '../../../assets/challenge/dragonIcon.png'
import DialogBox from '../../../components/DialogBox'
import Question from '../../../components/Question'


const ObjectDiv = styled.div`
            position: absolute;
            width: 1040px; 
            height: 415px;
            left: 100px;
            top: 130px;
            display: block;
            overflow: hidden;
            `

const HeaderDiv = styled.div`  
            width: 100%;
            height: 120px;
            display: flex;
            position: absolute;
            `
class Q1 extends React.Component<any> {

    render() {

        return <React.Fragment>
            <ObjectDiv>
                <Question
                    answerValidate={this.props.answerCheck}
                    choices={["|01> และ |10>", "|10> และ |11>", "|00> และ |11>"]}
                    solution={1}
                />
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} next={this.props.pass ? this.props.next : null}
                message="ฮึ่ม เจ้าตอบได้ถูกต้อง" />
            }
            {!this.props.pass && <DialogBox img={dragonIcon} next={this.props.pass ? this.props.next : null}
                message="ไหนลองบอกผลลัพธ์ที่เป็นไปได้ หากเรานำคิวบิตที่มีค่าเท่ากับ |0> สองตัว ทำการต่อวงจรด้วย H-Gate ที่คิวบิตที่สอง และ X-Gate ที่คิวบิตที่หนึ่ง " />
            }
        </React.Fragment>
    }
}

class Q2 extends React.Component<any> {

    render() {
        return <React.Fragment>
            <ObjectDiv>
                <Question
                    answerValidate={this.props.answerCheck}
                    choices={["Alan turing", "Steve Job", "John Stewart Bell"]}
                    solution={2}
                />
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} next={this.props.pass ? this.props.next : null}
                message="ฮึ่ม เจ้าตอบได้ถูกต้อง" />
            }
            {!this.props.pass && <DialogBox img={dragonIcon} next={this.props.pass ? this.props.next : null}
                message="ใครมีส่วนเกี่ยวข้องกับการวิจัยควอนตัมคอมพิวเตอร์ " />
            }
        </React.Fragment>
    }
}

export { Q1, Q2 }