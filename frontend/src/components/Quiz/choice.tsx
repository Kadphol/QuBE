import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
    border: solid green;
    height: 500px;
    padding-top: 50px;
    button {
        padding: 10px;
        font-family: 'Kanit',sans-serif;
        font-size: 30px;
        margin-top: 40px;
    }
`

interface IProps {
    answerCheck: (string)=>void
}

class Choice extends React.Component <IProps> {

    render() {
        return(
        <React.Fragment>
            <Main>
            <button className="btn btn-primary" onClick={()=>this.props.answerCheck('0')}>ข้อนี้ผิด</button><br/>
            <button className="btn btn-primary" onClick={()=>this.props.answerCheck('1')}>ข้อนี้ถูก</button><br/>
            <button className="btn btn-primary" onClick={()=>this.props.answerCheck('2')}>ข้อนี้ผิด</button>
            </Main>
        </React.Fragment>
        )
    }
}

export default Choice