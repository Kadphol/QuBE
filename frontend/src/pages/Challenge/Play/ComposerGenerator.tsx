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
              <Composer column={6} n={2} quiz={true} answerCheck={this.props.answerCheck} solution={[0, 50, 50, 0]} />
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
            message="ฮึ่ม เจ้าตอบได้ถูกต้อง"/>
            }
            {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
            message="ไหนเจ้าลองต่อวงจรควอนตัม ให้ได้ผลลัพธ์เป็น 01 และ 10 อย่างละเท่า ๆ กันดูซิ"/>
            }
          </React.Fragment>
    }
}

class C2 extends React.Component<any> {

    render() {

    return <React.Fragment>
            <ObjectDiv>
              <Composer column={6} n={2} quiz={true} answerCheck={this.props.answerCheck} solution={[50, 0, 0 ,50]} />
            </ObjectDiv>
            {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
            message="ฮึ่ม เจ้าตอบได้ถูกต้อง"/>
            }
            {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
            message="ไหนเจ้าลองต่อวงจรควอนตัม ให้ได้ผลลัพธ์เป็น 00 และ 11 อย่างละเท่า ๆ กันดูซิ"/>
            }
          </React.Fragment>
    }
}

class C3 extends React.Component<any> {

  render() {

  return <React.Fragment>
          <ObjectDiv>
            <Composer column={6} n={2} quiz={true} answerCheck={this.props.answerCheck} solution={[25,25,25,25]} />
          </ObjectDiv>
          {this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
          message="ฮึ่ม เจ้าตอบได้ถูกต้อง"/>
          }
          {!this.props.pass && <DialogBox img={dragonIcon} showNext={this.props.pass} next={this.props.next}
          message="ไหนเจ้าลองต่อวงจรควอนตัม ให้ได้ผลลัพธ์เป็น 00,01,10,11 อย่างละเท่า ๆ กันดูซิ"/>
          }
        </React.Fragment>
  }
}


export {C1,C2,C3}