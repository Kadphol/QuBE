import React from 'react';
import styled from 'styled-components';
import Dialog from '../../components/DialogBox'
import { Redirect } from "react-router-dom";
import axios from '../../axiosconfig'
import { Iuser } from '../../type.modal';

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
    frameComponent: React.ComponentType<any>[];
    interactFrame: number[];
    noDialogFrame: number[];
    script: string[];
    icon: string[];
    background: string;
}


class Unit extends React.Component<IProps> {

    state = { frame: 0, star: 0 }

    lastFrame = this.props.frameComponent.length
    redirect = "/explore/chapter-".concat(this.props.chapter.toString())

    next = () => {
        let nextFrame = this.state.frame + 1
        let { chapter, star } = this.props.user
        if (nextFrame == this.lastFrame) {
            if (this.state.star > star![this.props.chapter]) star![this.props.chapter - 1] = this.state.star // if new star is higher, replace
            axios.put('http://localhost/updateInfo', { star: star })  // update star
            this.props.setUser(() => ({ ...this.props.user, star: star }))
            if (this.props.chapter > chapter!) {
                axios.put('http://localhost/updateInfo', { unit: 0, chapter: this.props.chapter })  // clear chapter
                this.props.setUser(() => ({ ...this.props.user, unit: 0, chapter: this.props.chapter }))
            }
        }
        this.setState({ frame: nextFrame })
    }

    componentWillReceiveProps = () => {
        this.forceUpdate();
    }

    increaseStar = () => {
        this.setState({ star: this.state.star + 1 })
    }

    showDialog = (index: number) => {
        const find = this.props.interactFrame.indexOf(index);
        if (find > -1) {
            this.props.interactFrame.splice(find, 1);
        }
        this.forceUpdate();
    }

    render() {
        var { frame } = this.state
        var { icon, script, background, interactFrame, noDialogFrame } = this.props
        const { frameComponent: Component } = this.props;
        return (
            <Main style={{ background: `url(${background})` }}>
                {Component.map((Item, index) => (
                    frame == index &&
                    <React.Fragment>
                        <Item index={index} star={this.state.star} next={this.next} showDialog={this.showDialog} increaseStar={this.increaseStar} />
                        {!noDialogFrame.includes(index) &&
                            <Dialog showNext={interactFrame.includes(index) ? false : true} next={this.next} img={icon[index]} message={script[index]} />
                        }
                    </React.Fragment>
                )
                )}
                {frame == this.lastFrame && <Redirect to={this.redirect} />}
            </Main>
        );
    }
}

export default Unit