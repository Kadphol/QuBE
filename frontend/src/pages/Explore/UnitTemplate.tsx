import React from 'react';
import styled from 'styled-components';
import Dialog from '../../components/DialogBox'
import { Redirect } from "react-router-dom";
import axios from '../../axiosconfig'
import { Iuser } from '../../type.modal';
// import F4 from './F4'
// import F5 from './F5'
// import F6 from './F6'
// import F7 from './F7'

const Main = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;
`;

interface IProps {
    setUser: any;
    user: Iuser;
    chapter: number;
    unit: number;
    frameComponent: React.ComponentType<any>[];
    interactFrame: number[];
    script: string[];
    icon: string[];
    background: string;
}


class Unit extends React.Component <IProps> {

    state = {frame: 0}

    lastFrame = this.props.frameComponent.length
    redirect = "/explore/chapter-".concat(this.props.chapter.toString())

    next = () => {
        let nextFrame = this.state.frame + 1
        let {chapter,unit} = this.props.user
        let updateChapter = this.props.chapter-1
        let updateUnit = this.props.unit
        if (nextFrame == this.lastFrame) {
            if(updateChapter>chapter! || (updateChapter==chapter && updateUnit>unit!)){
            axios.put('http://localhost/updateInfo', { unit: updateUnit, chapter: updateChapter})  // not clear chapter yet
            this.props.setUser(()=>({...this.props.user,unit: updateUnit, chapter: updateChapter}))
            }
        }
        this.setState({ frame: nextFrame })
    }

    componentWillReceiveProps = () => {
        this.forceUpdate();
    }

    render() {
        var {frame} = this.state
        var {icon,script,background,interactFrame} = this.props
        const { frameComponent: Component } = this.props;
        return (
        <Main style={{ background: `url(${background})` }}>
                {Component.map((Item,index)=>(
                    frame == index &&
                    <React.Fragment>
                        <Item next={this.next}/>
                        <Dialog showNext={interactFrame.includes(index)?false:true} next={this.next} img={icon[index]} message={script[index]} />
                    </React.Fragment>
                )
                )}
                {frame == this.lastFrame && <Redirect to={this.redirect} />}
            </Main>
        );
    }
}

export default Unit