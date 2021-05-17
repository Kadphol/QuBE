

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
                    choices={["Alan turing", "Steve Job", "John Stewart Bell", "Bill Gates"]}
                    solution={0}
                />
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message="เจ้าตอบได้ถูกต้อง" />
            }
            {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message="ใครเป็นผู้คิดค้นคอมพิวเตอร์เครื่องแรกของโลก ?" />
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
                    choices={["Alan turing", "Steve Job", "John Stewart Bell", "Bill Gates"]}
                    solution={2}
                />
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message="เจ้าตอบได้ถูกต้อง" />
            }
            {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message="ใครมีส่วนเกี่ยวข้องกับการวิจัยควอนตัมคอมพิวเตอร์ยุคแรก ?" />
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
            {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message="เจ้าตอบได้ถูกต้อง" />
            }
            {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message="ในการต่อวงจร Grover's Algorithm (3 คิวบิต) ไม่จำเป็นต้องใช้เกตในข้อใด ?" />
            }
        </React.Fragment>
    }
}

class Q4 extends React.Component<any> {

    render() {
        return <React.Fragment>
            <ObjectDiv>
                <Question
                    answerValidate={this.props.answerCheck}
                    choices={["Hardamard gate","CCZ gate","Pauli-X gate","CNOT gate"]}
                    solution={1}
                />
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message="เจ้าตอบได้ถูกต้อง" />
            }
            {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message="ในการต่อวงจร Deutsch Jozsa Algorithm ไม่จำเป็นต้องใช้เกตในข้อใด ?" />
            }
        </React.Fragment>
    }
}

class Q5 extends React.Component<any> {

    render() {
        return <React.Fragment>
            <ObjectDiv>
                <Question
                    answerValidate={this.props.answerCheck}
                    choices={["Hardamard gate","CZ gate","Pauli-X gate","CNOT gate"]}
                    solution={2}
                />
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message="เจ้าตอบได้ถูกต้อง" />
            }
            {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message="ในการต่อวงจร Teleportation ไม่จำเป็นต้องใช้เกตในข้อใด ?" />
            }
        </React.Fragment>
    }
}

class Q6 extends React.Component<any> {

    render() {
        return <React.Fragment>
            <ObjectDiv>
                <Question
                    answerValidate={this.props.answerCheck}
                    choices={["8 คิวบิต 16 Time steps","8 คิวบิต 20 Time steps","9 คิวบิต 20 Time steps","9 คิวบิต 22 Time steps"]}
                    solution={3}
                />
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message="เจ้าตอบได้ถูกต้อง" />
            }
            {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message=" หากมีข้อมูลจำนวน 400 ข้อมูล Grover's algorithm ต้องใช้คิวบิตทั้งหมดกี่คิวบิต และใช้เวลาในการคำนวณเท่าไร ?  " />
            }
        </React.Fragment>
    }
}

class Q7 extends React.Component<any> {

    render() {
        return <React.Fragment>
            <ObjectDiv>
                <Question
                    answerValidate={this.props.answerCheck}
                    choices={["8 คิวบิต 16 Time steps","8 คิวบิต 14 Time steps","9 คิวบิต 14 Time steps","9 คิวบิต 22 Time steps"]}
                    solution={0}
                />
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message="เจ้าตอบได้ถูกต้อง" />
            }
            {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message=" หากมีข้อมูลจำนวน 200 ข้อมูล Grover's algorithm ต้องใช้คิวบิตทั้งหมดกี่คิวบิต และใช้เวลาในการคำนวณเท่าไร ?  " />
            }
        </React.Fragment>
    }
}


class Q8 extends React.Component<any> {

    render() {
        return <React.Fragment>
            <ObjectDiv>
                <Question
                    answerValidate={this.props.answerCheck}
                    choices={["Superposition","Entanglement State","Teleportation","Oracle"]}
                    solution={1}
                />
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message="เจ้าตอบได้ถูกต้อง" />
            }
            {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message="ข้อใดเป็นผลลัพธ์ที่คาดหวัง จากการต่อวงจร Bell Pair ?" />
            }
        </React.Fragment>
    }
}

class Q9 extends React.Component<any> {

    render() {
        return <React.Fragment>
            <ObjectDiv>
                <Question
                    answerValidate={this.props.answerCheck}
                    choices={["Superposition","Entanglement State","Teleportation","Oracle"]}
                    solution={0}
                />
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message="เจ้าตอบได้ถูกต้อง" />
            }
            {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message="ข้อใดเป็นผลลัพธ์ที่คาดหวัง หลังจากต่อคิวบิตตั้งต้นเข้ากับ Hardamard Gate" />
            }
        </React.Fragment>
    }
}

class Q10 extends React.Component<any> {

    render() {
        return <React.Fragment>
            <ObjectDiv>
                <Question
                    answerValidate={this.props.answerCheck}
                    choices={["Superposition","Entanglement State","Teleportation","Oracle"]}
                    solution={3}
                />
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message="เจ้าตอบได้ถูกต้อง" />
            }
            {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.pass ? this.props.next : null}
                message="ข้อใดหมายถึงส่วน Input ของวงจรที่สามารถปรับเปลี่ยนได้ และส่งผลให้ผลลัพธ์ที่ได้แตกต่างกัน" />
            }
        </React.Fragment>
    }
}

export { Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10 }