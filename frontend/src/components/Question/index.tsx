import React from 'react'
import styled from 'styled-components'
import bar from '@assets/explore/chapter1/quiz/bar.png'
import barWrong from '@assets/explore/chapter1/quiz/barWrong.png'
import barCorrect from '@assets/explore/chapter1/quiz/barCorrect.png'
const sfxClick = require('@assets/sound/sfx_click.mp3').default
const sfxCorrect = require('@assets/sound/sfx_correct.mp3').default
const sfxWrong = require('@assets/sound/sfx_wrong.mp3').default



const Main = styled.div`
    height: 415px;
    padding-top: 30px;
    position: relative;
    text-align: center;
    img {
        position: absolute;
        cursor: pointer;
    }
    p {
        width: 260px;
        font-family: 'Kanit',sans-serif;
        font-size: 20px;
        cursor: pointer;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

interface IProps {
    answerValidate: (string) => void;
    choices: string[];
    solution: number;
    showSolution?: Boolean;
}

class Choice extends React.Component<IProps> {

    state = {
        barShow: [bar, bar, bar, bar]
    }

    click = new Audio(sfxClick)
    correct = new Audio(sfxCorrect)
    wrong = new Audio(sfxWrong)

    componentDidMount = () => {
       if(this.props.showSolution){
        let solutionBar = [barWrong,barWrong,barWrong,barWrong]
        solutionBar[this.props.solution] = barCorrect
        this.setState({barShow:solutionBar})
       }
    }

    select = (selectItem) => {
        let valid = selectItem === this.props.solution
        if (this.state.barShow[selectItem] === bar) {
            let barShow = this.state.barShow
            barShow[selectItem] = valid ? barCorrect : barWrong
            let sfx = valid ? this.correct : this.wrong
            sfx.play()
            this.setState({ barShow: barShow })
            this.props.answerValidate(valid)
        }
    }

    componentWillReceiveProps = () => {
    }

    render() {
        return (
            <React.Fragment>
                <Main>
                    <div 
                    onMouseDown={()=>this.click.play()}
                    onClick={() => this.select(0)}>
                        <img src={this.state.barShow[0]} style={{ top: '100px', left:'175px' }} alt="choice 1"/>
                        <p style={{ top: '160px', left:'330px' }}>{this.props.choices[0]}</p>
                    </div>
                    <div 
                    onMouseDown={()=>this.click.play()}
                    onClick={() => this.select(1)}>
                        <img src={this.state.barShow[1]} style={{ top: '100px', left:'525px' }} alt="choice 2"/>
                        <p style={{ top: '160px', left:'680px' }}>{this.props.choices[1]}</p>
                    </div>
                    <div 
                    onMouseDown={()=>this.click.play()}
                    onClick={() => this.select(2)}>
                        <img src={this.state.barShow[2]} style={{ top: '250px', left:'175px' }} alt="choice 3"/>
                        <p style={{ top: '310px', left:'330px' }}>{this.props.choices[2]}</p>
                    </div>
                    <div 
                    onMouseDown={()=>this.click.play()}
                    onClick={() => this.select(3)}>
                        <img src={this.state.barShow[3]} style={{ top: '250px', left:'525px' }} alt="choice 3"/>
                        <p style={{ top: '310px', left:'680px' }}>{this.props.choices[3]}</p>
                    </div>
                </Main>
            </React.Fragment>
        )
    }
}

export default Choice