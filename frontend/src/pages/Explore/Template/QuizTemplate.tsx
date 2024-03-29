import React from 'react';
import styled from 'styled-components';
import Dialog from '@components/DialogBox';
import { Redirect } from "react-router-dom";
import axios from '@config/axiosconfig';
import { Iuser } from '@src/type.modal';
import Back from '@components/Button/back'

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

    next = async() => {
        let nextFrame = this.state.frame + 1
        let { chapter, unit, star } = this.props.user
        if (nextFrame === this.lastFrame-1) {
            // set star, chapter, unit then update only one time
            star![this.props.chapter - 1] = this.state.star > star![this.props.chapter-1]? this.state.star : star![this.props.chapter - 1]
            unit = this.props.chapter > chapter!? 0 : unit
            chapter = this.props.chapter > chapter!? this.props.chapter : chapter
            axios.put(`/updateInfo`, { star: star, unit: unit, chapter: chapter })
            this.props.setUser(() => ({ ...this.props.user, star: star, unit: unit, chapter: chapter }))
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
        const menuPath = `/explore/chapter-${this.props.chapter}`
        
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
                        <Back path={menuPath} />
                    </React.Fragment>
                )
                )}
                {frame === this.lastFrame && <Redirect to={this.redirect} />}
            </Main>
        );
    }
}

export default Unit