

import React from 'react';
import styled from 'styled-components'
import dragonIcon from '../../../assets/challenge/dragonBlackIcon.png'
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
                    choices={["Superposition", "Entanglement", "Teleportation","Oracle"]}
                    solution={1}
                />
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} next={this.props.pass ? this.props.next : null}
                message="เจ้าตอบได้ถูกต้อง" />
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
                    choices={["Alan turing", "Steve Job", "John Stewart Bell","Benjamin Franklin"]}
                    solution={2}
                />
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} next={this.props.pass ? this.props.next : null}
                message="เจ้าตอบได้ถูกต้อง" />
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
                    choices={["Hardamard gate","CCZ gate","Pauli-X gate","CNOT gate"]}
                    solution={3}
                />
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} next={this.props.pass ? this.props.next : null}
                message="เจ้าตอบได้ถูกต้อง" />
            }
            {!this.props.pass && <DialogBox img={dragonIcon} next={this.props.pass ? this.props.next : null}
                message="ในการต่อวงจร Grover's Algorithm สำหรับ 3 คิวบิต ไม่จำเป็นต้องใช้เกตในข้อใด " />
            }
        </React.Fragment>
    }
}

export { Q1, Q2, Q3 }