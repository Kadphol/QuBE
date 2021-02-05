import React from 'react'
import styled from 'styled-components'
import bar from '../../assets/explore/chapter1/quiz/bar.png'
import barWrong from '../../assets/explore/chapter1/quiz/barWrong.png'
import barCorrect from '../../assets/explore/chapter1/quiz/barCorrect.png'
const sfxClick = require('../../assets/sound/sfx_click.mp3').default
const sfxCorrect = require('../../assets/sound/sfx_correct.mp3').default
const sfxWrong = require('../../assets/sound/sfx_wrong.mp3').default



const Main = styled.div`
    height: 415px;
    padding-top: 30px;
    position: relative;
    text-align: center;
    img {
        position: absolute;
        margin-top: 60px;
        cursor: pointer;
        left: 360px;
    }
    p {
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
}

class Choice extends React.Component<IProps> {

    state = {
        barShow: [bar, bar, bar]
    }

    click = new Audio(sfxClick)
    correct = new Audio(sfxCorrect)
    wrong = new Audio(sfxWrong)

    select = (selectItem) => {
        let valid = selectItem === this.props.solution
        if (this.state.barShow[selectItem] == bar) {
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
                        <img src={this.state.barShow[0]} style={{ top: '-30px' }} />
                        <p style={{ top: '90px' }}>{this.props.choices[0]}</p>
                    </div>
                    <div 
                    onMouseDown={()=>this.click.play()}
                    onClick={() => this.select(1)}>
                        <img src={this.state.barShow[1]} style={{ top: '100px' }} />
                        <p style={{ top: '220px' }}>{this.props.choices[1]}</p>
                    </div>
                    <div 
                    onMouseDown={()=>this.click.play()}
                    onClick={() => this.select(2)}>
                        <img src={this.state.barShow[2]} style={{ top: '230px' }} />
                        <p style={{ top: '350px' }}>{this.props.choices[2]}</p>
                    </div>
                </Main>
            </React.Fragment>
        )
    }
}

export default Choice