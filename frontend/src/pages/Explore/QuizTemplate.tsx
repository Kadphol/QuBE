import React from 'react';
import styled from 'styled-components';
import Dialog from '@components/DialogBox';
import { Redirect } from "react-router-dom";
import axios from '@config/axiosconfig';
import ENDPOINT from '@config/endpoint'
import { Iuser } from '@src/type.modal';

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
    interactFrame: React.ComponentType<any>[];
    noDialogFrame: React.ComponentType<any>[];
    script: string[];
    icon: string[];
    background: string;
}


class Unit extends React.Component<IProps> {

    state = { frame: 0, star: 0, prevStar: 0, clear: false }

    lastFrame = this.props.frameComponent.length
    redirect = "/explore/chapter-".concat(this.props.chapter.toString())

    next = () => {
        let nextFrame = this.state.frame + 1
        let { chapter, star } = this.props.user
        if (nextFrame == this.lastFrame-1) {
            if (this.state.star > star![this.props.chapter-1]) { // if new star is higher, replace
                star![this.props.chapter - 1] = this.state.star
                axios.put(`${ENDPOINT.URL}/updateInfo`, { star: star })  // update star
                this.props.setUser(() => ({ ...this.props.user, star: star }))
            }
            if (this.props.chapter > chapter!) {
                axios.put(`${ENDPOINT.URL}/updateInfo`, { unit: 0, chapter: this.props.chapter })  // clear chapter
                this.props.setUser(() => ({ ...this.props.user, unit: 0, chapter: this.props.chapter }))
            }
        }
        this.setState({ frame: nextFrame, clear: false })
    }

    componentWillReceiveProps = () => {
        this.forceUpdate();
    }

    increaseStar = () => {
        this.setState({ star: this.state.star + 1 })
    }

    justClear = (index: number) => {
        this.setState({ prevStar: this.state.star , clear: true})
    }

    render() {
        var { frame, clear } = this.state
        var { icon, script, background, interactFrame, noDialogFrame } = this.props
        const { frameComponent: Component } = this.props;
        return (
            <Main style={{ background: `url(${background})` }}>
                {Component.map((Item, index) => (
                    frame === index &&
                    <React.Fragment>
                        <Item index={index} star={this.state.star} prevStar={this.state.prevStar} next={this.next} justClear={this.justClear} increaseStar={this.increaseStar} />
                        {!noDialogFrame.includes(Item) && !clear &&
                            <Dialog showNext={interactFrame.includes(Item) ? false : true} next={this.next} img={icon[index]} message={script[index]} />
                        }
                        {clear &&
                            <Dialog showNext next={this.next} img={icon[index]} message={"ฮึ่ม! ถูกต้อง"} />
                        }
                    </React.Fragment>
                )
                )}
                {frame === this.lastFrame && <Redirect to={this.redirect} />}
            </Main>
        );
    }
}

export default Unit