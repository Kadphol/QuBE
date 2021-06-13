import React from 'react';
import styled from 'styled-components'
import dragonIcon from '../../../assets/challenge/dragonBlackIcon.png'
import DialogBox from '../../../components/DialogBox'
import Composer from '../../../components/Composer'

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
class C1 extends React.Component<any> {

    render() {

    return <React.Fragment>
            <ObjectDiv>
              <Composer column={6} n={2} quiz={true} answerCheck={this.props.answerCheck} solution={[0, 50, 50, 0]} remove={['ccx','ccz']}/>
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
            message="ฮึ่ม เจ้าตอบได้ถูกต้อง"/>
            }
            {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
            message="จงต่อวงจรให้ได้ผลลัพธ์เป็น 01 และ 10 อย่างละเท่า ๆ กัน ใบ้ให้ว่าวงจร Bell Pair ช่วยเจ้าได้"/>
            }
          </React.Fragment>
    }
}

class C2 extends React.Component<any> {

    render() {

    return <React.Fragment>
            <ObjectDiv>
              <Composer column={6} n={2} quiz={true} answerCheck={this.props.answerCheck} solution={[50, 0, 0 ,50]} remove={['ccx','ccz']}/>
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
            message="ฮึ่ม เจ้าตอบได้ถูกต้อง"/>
            }
            {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
            message="จงต่อวงจรให้ได้ผลลัพธ์เป็น 00 และ 11 อย่างละเท่า ๆ กัน ใบ้ให้ว่าวงจร Bell Pair ช่วยเจ้าได้"/>
            }
          </React.Fragment>
    }
}

class C3 extends React.Component<any> {

  render() {

  return <React.Fragment>
          <ObjectDiv>
            <Composer column={6} n={2} quiz={true} answerCheck={this.props.answerCheck} solution={[50,50,0,0]} remove={['ccx','ccz','x']}/>
          </ObjectDiv>
          {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
          message="ฮึ่ม เจ้าตอบได้ถูกต้อง"/>
          }
          {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
          message="จงต่อวงจรให้ได้ผลลัพธ์เป็น 00 และ 01 อย่างละเท่า ๆ กัน แต่ข้าไม่อนุญาตให้ใช้ Pauli-X Gate"/>
          }
        </React.Fragment>
  }
}

class C4 extends React.Component<any> {

  render() {

    return <React.Fragment>
            <ObjectDiv>
              <Composer column={6} n={2} quiz={true} answerCheck={this.props.answerCheck} solution={[0,0,50,50]} remove={['ccx','ccz','x']}/>
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
            message="ฮึ่ม เจ้าตอบได้ถูกต้อง"/>
            }
            {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
            message="จงต่อวงจรให้ได้ผลลัพธ์เป็น 10 และ 11 อย่างละเท่า ๆ กัน แต่ข้าไม่อนุญาตให้ใช้ Pauli-X Gate"/>
            }
          </React.Fragment>
    }
  }

class C5 extends React.Component<any> {

  render() {

    return <React.Fragment>
            <ObjectDiv>
              <Composer column={6} n={2} quiz={true} answerCheck={this.props.answerCheck} solution={[0,50,0,50]} remove={['ccx','ccz','x']}/>
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
            message="ฮึ่ม เจ้าตอบได้ถูกต้อง"/>
            }
            {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
            message="จงต่อวงจรให้ได้ผลลัพธ์เป็น 01 และ 11 อย่างละเท่า ๆ กัน แต่ข้าไม่อนุญาตให้ใช้ Pauli-X Gate"/>
            }
          </React.Fragment>
    }
  }

class C6 extends React.Component<any> {

  render() {

    return <React.Fragment>
            <ObjectDiv>
              <Composer column={6} n={2} quiz={true} answerCheck={this.props.answerCheck} solution={[50,0,50,0]} remove={['ccx','ccz','x']}/>
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
            message="ฮึ่ม เจ้าตอบได้ถูกต้อง"/>
            }
            {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
            message="จงต่อวงจรให้ได้ผลลัพธ์เป็น 00 และ 10 อย่างละเท่า ๆ กัน แต่ข้าไม่อนุญาตให้ใช้ Pauli-X Gate"/>
            }
          </React.Fragment>
    }
  }

class C7 extends React.Component<any> {

  render() {

  return <React.Fragment>
          <ObjectDiv>
            <Composer column={6} n={2} quiz={true} answerCheck={this.props.answerCheck} solution={[0,0,0,100]} remove={['ccx','ccz']} condition={['h','cx','x']}/>
          </ObjectDiv>
          {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
          message="ฮึ่ม เจ้าตอบได้ถูกต้อง"/>
          }
          {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
          message="จงต่อวงจร Deutsch Jozsa Algorithm โดยใช้ Oracle เป็น C-NOT Gate 1 ตัว เพื่อพิสูจน์ว่าเป็น Balance Function"/>
          }
        </React.Fragment>
  }
}

class C8 extends React.Component<any> {

  render() {

  return <React.Fragment>
          <ObjectDiv>
            <Composer column={6} n={2} quiz={true} answerCheck={this.props.answerCheck} solution={[0,100,0,0]} remove={['ccx','ccz']} condition={['h','cx','x']}/>
          </ObjectDiv>
          {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
          message="ฮึ่ม เจ้าตอบได้ถูกต้อง"/>
          }
          {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
          message="จงต่อวงจร Deutsch Jozsa Algorithm โดยใช้ Oracle เป็น C-NOT Gate 2 ตัว เพื่อพิสูจน์ว่าเป็น Constant Function"/>
          }
        </React.Fragment>
  }
}

class C9 extends React.Component<any> {

  render() {

  return <React.Fragment>
          <ObjectDiv>
            <Composer column={6} n={2} quiz={true} answerCheck={this.props.answerCheck} solution={[0,0,100,0]} remove={['ccx','ccz','x','y']}/>
          </ObjectDiv>
          {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
          message="ฮึ่ม เจ้าตอบได้ถูกต้อง"/>
          }
          {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
          message="จงต่อวงจรควอนตัมให้ได้ผลลัพธ์เป็น 10 เท่านั้น แต่ข้าไม่อนุญาตให้เจ้าใช้ Pauli-X Gate และ Pauli-Y Gate"/>
          }
        </React.Fragment>
  }
}

class C10 extends React.Component<any> {

  render() {

  return <React.Fragment>
          <ObjectDiv>
            <Composer column={6} n={2} quiz={true} answerCheck={this.props.answerCheck} solution={[0,100,0,0]} remove={['ccx','ccz','x','y']}/>
          </ObjectDiv>
          {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
          message="ฮึ่ม เจ้าตอบได้ถูกต้อง"/>
          }
          {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
          message="จงต่อวงจรควอนตัมให้ได้ผลลัพธ์เป็น 01 เท่านั้น แต่ข้าไม่อนุญาตให้เจ้าใช้ Pauli-X Gate และ Pauli-Y Gate"/>
          }
        </React.Fragment>
  }
}


// class C11 extends React.Component<any> {

//   render() {

//   return <React.Fragment>
//           <ObjectDiv>
//             <Composer column={6} n={2} quiz={true} answerCheck={this.props.answerCheck} solution={[25,25,25,25]} remove={['ccx','ccz']}/>
//           </ObjectDiv>
//           {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
//           message="ฮึ่ม เจ้าตอบได้ถูกต้อง"/>
//           }
//           {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
//           message="จงต่อวงจรให้ได้ผลลัพธ์เป็น 00 01 10 และ 11 อย่างละเท่า ๆ กัน"/>
//           }
//         </React.Fragment>
//   }
// }

export {C1,C2,C3,C4,C5,C6,C7,C8,C9,C10}
