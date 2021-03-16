import React from 'react';
import styled from 'styled-components';
import Bew from '@assets/explore/chapter2/Bew.png'

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

class F0 extends React.Component {
    render() {
        return (<Main>
                <Content>
                    <img src={Bew} style={{position:'absolute',left:'400px',top:'150px'}} />
                </Content>
            </Main>);  
}}

class F1 extends React.Component {
    render() {
        return (<Main>
                <Content>
                    <img src={Bew} style={{position:'absolute',left:'400px',top:'150px'}} />
                </Content>
            </Main>);  
}}

class F2 extends React.Component {
    render() {
        return (<Main>
                <Content>
                </Content>
            </Main>);  
}}

class F3 extends React.Component {
    render() {
        return (<Main>
                <Content>
                    3
                </Content>
            </Main>);  
}}

class F4 extends React.Component {
    render() {
        return (<Main>
                <Content>
                    4
                </Content>
            </Main>);  
}}

class F5 extends React.Component {
    render() {
        return (<Main>
                <Content>
                    5
                </Content>
            </Main>);  
}}

class F6 extends React.Component {
    render() {
        return (<Main>
                <Content>
                    6
                </Content>
            </Main>);  
}}

class F7 extends React.Component {
    render() {
        return (<Main>
                <Content>
                    7
                </Content>
            </Main>);  
}}

class F8 extends React.Component {
    render() {
        return (<Main>
                <Content>
                    8
                </Content>
            </Main>);  
}}

export {F0,F1,F2,F3,F4,F5,F6,F7,F8}