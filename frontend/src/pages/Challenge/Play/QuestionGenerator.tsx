

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
                    choices={["Superposition", "Entanglement", "Teleportation"]}
                    solution={1}
                />
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} next={this.props.pass ? this.props.next : null}
                message="ฮึ่ม เจ้าตอบได้ถูกต้อง" />
            }
            {!this.props.pass && <DialogBox img={dragonIcon} next={this.props.pass ? this.props.next : null}
                message="ข้อใดเป็นผลลัพธ์ที่คาดหวัง จากการต่อวงจร Bell Pair" />
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

class Q3 extends React.Component<any> {

    render() {
        return <React.Fragment>
            <ObjectDiv>
                <Question
                    answerValidate={this.props.answerCheck}
                    choices={["Control-Z Gate","Control-NOT Gate","Toffoli Gate"]}
                    solution={0}
                />
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} next={this.props.pass ? this.props.next : null}
                message="ฮึ่ม เจ้าตอบได้ถูกต้อง" />
            }
            {!this.props.pass && <DialogBox img={dragonIcon} next={this.props.pass ? this.props.next : null}
                message="ควอนตัมเกตในข้อใดที่สามารถทำงานได้ถูกต้อง แม้จะสลับด้านแต่ละคิวบิต" />
            }
        </React.Fragment>
    }
}

export { Q1, Q2, Q3 }