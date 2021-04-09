import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import far from '@assets/explore/chapter3/backgroundFar.png';
import close from '@assets/explore/chapter3/backgroundClose.png';
import ChapterBox from '@components/ChapterBox'
import maxIcon from '@assets/explore/chapter3/maxIcon.png';
import max from '@assets/explore/chapter3/max.png'
import qubieIcon from '@assets/explore/qubieIcon.png';
import qubie from '@assets/explore/Qubie.png'

const sfxClick = require('@assets/sound/sfx_click.mp3').default

const Main = styled.div`
width: 100%;
height: 100%;
margin: auto;
position: absolute;
`;

const Content = styled.div`
width: 100%;
height: 100%;
margin: auto;
position: relative;
`;

class F0 extends React.Component<any> {

    click = new Audio(sfxClick)

    render() {
        return (<Main>
            <Content >
                <ChapterBox button next={this.props.next} chapter="3" title="การวัด" textColor="brown" boxColor="coral" buttonColor="brown" text="เริ่มต้น" />
            </Content>
        </Main>);
    }
}

class F1 extends React.Component {
    render() {
        return (<Main>
            <Content style={{backgroundImage:`url(${close})`}}>
            </Content>
        </Main>);
    }
}

class F2 extends React.Component {
    render() {
        return (<Main>
            <Content style={{backgroundImage:`url(${close})`}}>
            </Content>
        </Main>);
    }
}

class F3 extends React.Component {
    render() {
        return (<Main style={{backgroundImage:`url(${close})`}}>
            <Content>
            </Content>
        </Main>);
    }
}

class F4 extends React.Component {
    render() {
        return (<Main style={{backgroundImage:`url(${close})`}}>
            <Content>
            </Content>
        </Main>);
    }
}

class F5 extends React.Component {
    render() {
        return (<Main>
            <Content style={{backgroundImage:`url(${close})`}}>
            </Content>
        </Main>);
    }
}

class F6 extends React.Component {
    render() {
        return (<Main>
            <Content style={{backgroundImage:`url(${close})`}}>
            </Content>
        </Main>);
    }
}

class F7 extends React.Component {
    render() {
        return (<Main>
            <Content style={{backgroundImage:`url(${close})`}}>
            </Content>
        </Main>);
    }
}

export { F0, F1, F2, F3, F4, F5, F6, F7}