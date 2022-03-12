import React from 'react';
import x from '@assets/playground/x.png';
import xInuse from '@assets/playground/x_Inuse.png'
import y from '@assets/playground/y.png';
import yInuse from '@assets/playground/y_Inuse.png';
import z from '@assets/playground/z.png';
import zInuse from '@assets/playground/z_Inuse.png';
import h from '@assets/playground/h.png';
import hInuse from '@assets/playground/h_Inuse.png';
import cx from '@assets/playground/cx.png';
import cxInuse0 from '@assets/playground/cx_Inuse_0.png';
import cxInuse1 from '@assets/playground/cx_Inuse_1.png';
import cxInuse2 from '@assets/playground/cx_Inuse_2.png';
import cxInuse3 from '@assets/playground/cx_Inuse_3.png';
import cxInuse4 from '@assets/playground/cx_Inuse_4.png';
import cz from '@assets/playground/cz.png';
import czInuse0 from '@assets/playground/cz_Inuse_0.png';
import czInuse1 from '@assets/playground/cz_Inuse_1.png';
import czInuse2 from '@assets/playground/cz_Inuse_2.png';
import czInuse3 from '@assets/playground/cz_Inuse_3.png';
import czInuse4 from '@assets/playground/cz_Inuse_4.png';
import ccx from '@assets/playground/ccx.png';
import ccxInuse00 from '@assets/playground/ccx_Inuse_00.png';
import ccxInuse0 from '@assets/playground/ccx_Inuse_0.png';
import ccxInuse1 from '@assets/playground/ccx_Inuse_1.png';
import ccxInuse2 from '@assets/playground/ccx_Inuse_2.png';
import ccxInuse3 from '@assets/playground/ccx_Inuse_3.png';
import ccxInuse4 from '@assets/playground/ccx_Inuse_4.png';
import ccxInuse5 from '@assets/playground/ccx_Inuse_5.png';
import ccz from '@assets/playground/ccz.png';
import cczInuse00 from '@assets/playground/ccx_Inuse_5.png';
import cczInuse0 from '@assets/playground/ccx_Inuse_2.png';
import cczInuse1 from '@assets/playground/ccx_Inuse_4.png';
import cczInuse2 from '@assets/playground/ccx_Inuse_2.png';
import cczInuse3 from '@assets/playground/ccx_Inuse_3.png';
import cczInuse4 from '@assets/playground/ccx_Inuse_4.png';
import cczInuse5 from '@assets/playground/ccx_Inuse_5.png';
import m from '@assets/playground/m.png';
import e from '@assets/playground/delete.png';
import eInuse from '@assets/playground/e.png';
import q1 from '@assets/playground/q1.png';
import q2 from '@assets/playground/q2.png';
import q3 from '@assets/playground/q3.png';
import q4 from '@assets/playground/q4.png';
import q5 from '@assets/playground/q5.png';
import './Composer.scoped.css';
import axios from '@config/axiosconfig';
import { Row } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import Qubie from '@assets/explore/Qubie.png'
import styled, { keyframes } from 'styled-components';


const sfxClick = require('@assets/sound/sfx_click.mp3').default
const sfxCorrect = require('@assets/sound/sfx_correct.mp3').default
const sfxWrong = require('@assets/sound/sfx_wrong.mp3').default

const image: { [id: string]: string; } = { 'x': x, 'y': y, 'z': z, 'h': h, 'cx': cx, 'ccx': ccx, 'cz': cz, 'ccz': ccz, 'e': e };
const imageInuse: { [id: string]: string; } = {
    'x': xInuse, 'y': yInuse, 'z': zInuse, 'h': hInuse, 'e': eInuse,
    'cx0': cxInuse0, 'cx1': cxInuse1, 'cx2': cxInuse2, 'cx3': cxInuse3, 'cx4': cxInuse4,
    'cz0': czInuse0, 'cz1': czInuse1, 'cz2': czInuse2, 'cz3': czInuse3, 'cz4': czInuse4,
    'ccx00': ccxInuse00, 'ccx0': ccxInuse0, 'ccx1': ccxInuse1, 'ccx2': ccxInuse2, 'ccx3': ccxInuse3, 'ccx4': ccxInuse4, 'ccx5': ccxInuse5,
    'ccz00': cczInuse00, 'ccz0': cczInuse0, 'ccz1': cczInuse1, 'ccz2': cczInuse2, 'ccz3': cczInuse3, 'ccz4': cczInuse4, 'ccz5': cczInuse5,
};
const qubit: { [id: number]: string; } = { 0: q1, 1: q2, 2: q3, 3: q4, 4: q5, }
// var eLine = Array(13).fill('e')

const QubieWrapper = styled.div`
    transform: scaleX(-1);
    margin-top: -60px;
    margin-left: 50px;
`;

const Fly = styled.div`
    animation: ${keyframes`
    from, to {transform: translateY(0px)}
    50% {transform: translateY(30px)}
    `} 2.5s infinite forwards
`

interface IProps {
    quiz: boolean,
    answerCheck: (string) => void,
    column: number,
    n: number,
    solution?: number[],
    remove?: string[],
    condition?: string[]
}

interface IState {
    active: string;
    activeElement: HTMLElement;
    placingGate: Array<Array<number>>;
    multipleGate: Array<Array<Array<number>>>;
    n: number;
    ccimg: string[][];
    cc: string[];
    selectShot: number;
    shot: number;
    result: {
        labels: Array<string>,
        datasets: Array<{
            backgroundColor: string;
            borderColor: string;
            borderWidth: number;
            data: Array<number>;
        }>
    }
}

const el: HTMLElement = document.getElementById('Composer')!;

class Composer extends React.Component<IProps, IState>{

    eLine = Array(this.props.column).fill('e')

    state = {
        active: 'e',
        activeElement: el,
        placingGate: Array(),
        multipleGate: Array(),
        n: this.props.n,
        ccimg: [this.eLine.slice(), this.eLine.slice()],
        cc: Array(),
        selectShot: 100,
        shot: 100,
        result: {
            labels: ['00', '01', '10', '11'],
            datasets: [
                {
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [0, 0, 0, 0]
                }
            ]
        }
    }

    click = new Audio(sfxClick)
    correct = new Audio(sfxCorrect)
    wrong = new Audio(sfxWrong)

    run = (): void => {
        axios.post('http://localhost/sim', { n: this.state.n, cc: this.state.cc, shot: this.state.selectShot })
            .then((res) => {
                let result = this.state.result
                result.labels = res.data.measureLabels
                result.datasets[0].data = res.data.measureValues
                if (this.props.quiz) {
                    let solutionValid = JSON.stringify(res.data.stateValues) == JSON.stringify(this.props.solution)
                    let conditionValid = true
                    let ccgates = this.state.cc.map(el => el.gate)
                    if (this.props.condition!) {
                        this.props.condition!.map(cond => {
                            if (!ccgates.includes(cond)) conditionValid = false
                        })
                    }

                    let valid = solutionValid && conditionValid
                    if (valid) this.correct.play()
                    else this.wrong.play()
                    this.props.answerCheck(valid)
                }
                this.setState({ result: result, shot: this.state.selectShot })
                console.log(result)
            })
    }

    activate = (e: React.MouseEvent<HTMLElement>, gate: string): void => {

        this.click.play()
        if (this.state.activeElement) this.state.activeElement.style.border = ""
        // if change gate while placing multiple gate, remove remaining gate in circuit
        if (this.state.placingGate.length !== 0) {
            this.state.placingGate.forEach(gateIndex => {
                let newccimg = this.state.ccimg
                newccimg[gateIndex[0]][gateIndex[1]] = 'e'
                this.setState({ ccimg: newccimg })
            })
        }
        if (gate !== this.state.active || gate == 'e') {
            const target = e.target as HTMLElement
            target.style.border = "1px solid black"
            this.setState({ active: gate, activeElement: target, placingGate: Array() })
        }
        else this.setState({ active: 'e', placingGate: Array() })
    }

    place = (line: number, col: number): void => {

        this.click.play()
        let cc = this.state.cc
        let newccimg: Array<Array<string>> = this.state.ccimg.slice()
        let placingGate = this.state.placingGate.slice()
        let multipleGate: Array<Array<Array<number>>> = this.state.multipleGate.slice()

        // check if replace on single gate, remove gate first
        const index = cc.findIndex(el => el.line === line && el.col === col)
        if (index !== -1) cc.splice(index, 1)

        // check if replace on multiple gate, then remove whole gate
        console.log('Number of Multiple gates', multipleGate.length)
        let foundIndex = -1
        foundIndex = multipleGate.findIndex((gatesIndex) =>
            gatesIndex.findIndex((gateIndex) => JSON.stringify([line, col]) === JSON.stringify(gateIndex)) !== -1
        )
        //foundIndex return index of set of multipleGate that was replaced
        if (foundIndex !== -1) {
            multipleGate[foundIndex].forEach(gateIndex => {
                console.log()
                //change every gate placed to empty line
                newccimg[gateIndex[0]][gateIndex[1]] = 'e'
                let foundIndex2 = -1
                cc.forEach((el, index) => {
                    if (Array.isArray(el.line)) {
                        // found index 2 return index of set of gate in cc that was replaced
                        // pick only one line but gateIndex will repeat until matched
                        if (el.line[0] === gateIndex[0] && el.col === gateIndex[1]) foundIndex2 = index
                    }
                })
                // remove that gate from cc
                if (foundIndex2 !== -1) cc.splice(foundIndex2, 1)
                console.log('p', cc)
            })
            // remove multiplegate that was replaced
            multipleGate.splice(foundIndex, 1)
            this.setState({ multipleGate: multipleGate, ccimg: newccimg, cc: cc })
        }

        if (this.state.active === 'cx') {
            if (this.state.placingGate.length === 0) {
                let newPlace = [line, col]
                placingGate.push(newPlace)
                newccimg[line][col] = 'cx2'
                this.setState({ ccimg: newccimg, placingGate: placingGate })
            }
            else {
                let newPlace = [line, col]
                let control1 = placingGate[0]
                let valid = col === control1[1] && line !== control1[0]
                if (valid) {
                    placingGate.push(newPlace)
                    // rotate
                    if (newPlace[0] < control1[0]) {
                        newccimg[control1[0]][control1[1]] = 'cx4'
                        newccimg[line][col] = 'cx0'
                    }
                    else newccimg[line][col] = 'cx1'
                    let forPush = [[control1[0], control1[1]], [line, col]]
                    // add line between c and x
                    let i = control1[0] < newPlace[0] ? control1[0] + 1 : newPlace[0] + 1
                    let j = control1[0] > newPlace[0] ? control1[0] : newPlace[0]
                    console.log(i, j)
                    while (i < j) {
                        newccimg[i][col] = 'cx3'
                        forPush.push([i, col])
                        i += 1
                    }
                    multipleGate.push(forPush)
                    const newgate = {
                        gate: 'cx',
                        line: [control1[0], newPlace[0]],
                        col: newPlace[1]
                    }
                    cc = [...cc, newgate]
                    this.setState({ ccimg: newccimg, cc: cc, placingGate: Array(), multipleGate: multipleGate }) // for ccx
                }
                else { // remove all cx before
                    newccimg[control1[0]][control1[1]] = 'e'
                    this.setState({ ccimg: newccimg, placingGate: Array() })
                }
            }
        }
        else if (this.state.placingGate.length === 2) {
            let newPlace: Array<number> = [line, col]
            let control1: Array<number> = placingGate[0]
            let control2: Array<number> = placingGate[1]
            let valid = col === control1[1] && line !== control1[0] && line !== control2[0]
            if (valid) {
                placingGate.push(newPlace)

                // find index of top, med, bottom line
                let top: number = Math.min(control1[0], control2[0], newPlace[0])
                let bottom: number = Math.max(control1[0], control2[0], newPlace[0])
                let med: number = [control1[0], control2[0], newPlace[0]].find(el => el !== top && el !== bottom)!

                if (top === newPlace[0]) newccimg[top][col] = 'ccz0'
                else newccimg[top][col] = 'ccz2'
                if (bottom === newPlace[0]) newccimg[bottom][col] = 'ccz1'
                else newccimg[bottom][col] = 'ccz4'
                if (med === newPlace[0]) newccimg[med][col] = 'ccz00'
                else newccimg[med][col] = 'ccz5'

                let forPush = [[control1[0], control1[1]], [control2[0], control2[1]], [line, col]]

                // add line between c and x
                let i = Math.min(control1[0], control2[0], newPlace[0]) + 1
                let j = Math.max(control1[0], control2[0], newPlace[0])
                console.log(i, j)
                while (i < j) {
                    if (i !== control1[0] && i !== control2[0] && i !== newPlace[0]) {
                        newccimg[i][col] = 'ccz3'
                        forPush.push([i, col])
                    }
                    i += 1
                }

                multipleGate.push(forPush)
                const newgate = {
                    gate: 'ccz',
                    line: [control1[0], control2[0], newPlace[0]],
                    col: newPlace[1]
                }
                cc = [...cc, newgate] // cannot apply ccx gate
                this.setState({ ccimg: newccimg, cc: cc, placingGate: Array(), multipleGate: multipleGate }) // clear Placing Gate, Add Miltiple Gate
            }
            else { // remove all ccx before
                newccimg[control1[0]][control1[1]] = 'e'
                newccimg[control2[0]][control2[1]] = 'e'
                this.setState({ ccimg: newccimg, placingGate: Array() })
            }
        }

        else if (this.state.active === 'cz') {
            if (this.state.placingGate.length === 0) {
                let newPlace = [line, col]
                placingGate.push(newPlace)
                newccimg[line][col] = 'cz2'
                this.setState({ ccimg: newccimg, placingGate: placingGate })
            }
            else {
                let newPlace = [line, col]
                let control1 = placingGate[0]
                let valid = col === control1[1] && line !== control1[0]
                if (valid) {
                    placingGate.push(newPlace)
                    // rotate
                    if (newPlace[0] < control1[0]) {
                        newccimg[control1[0]][control1[1]] = 'cz4'
                        newccimg[line][col] = 'cz0'
                    }
                    else newccimg[line][col] = 'cz1'
                    let forPush = [[control1[0], control1[1]], [line, col]]
                    // add line between c and x
                    let i = control1[0] < newPlace[0] ? control1[0] + 1 : newPlace[0] + 1
                    let j = control1[0] > newPlace[0] ? control1[0] : newPlace[0]
                    console.log(i, j)
                    while (i < j) {
                        newccimg[i][col] = 'cz3'
                        forPush.push([i, col])
                        i += 1
                    }
                    multipleGate.push(forPush)
                    const newgate = {
                        gate: 'cz',
                        line: [control1[0], newPlace[0]],
                        col: newPlace[1]
                    }
                    cc = [...cc, newgate]
                    this.setState({ ccimg: newccimg, cc: cc, placingGate: Array(), multipleGate: multipleGate }) // for ccx
                }
                else { //wrong line, remove all control from another line first
                    newccimg[control1[0]][control1[1]] = 'e'
                    this.setState({ ccimg: newccimg, placingGate: Array() })
                }
            }
        }

        else if (this.state.active === 'ccz') {
            console.log(placingGate.length)
            // place control1
            if (this.state.placingGate.length === 0) {
                let newPlace = [line, col]
                placingGate.push(newPlace)
                newccimg[line][col] = 'ccz2'
                this.setState({ ccimg: newccimg, placingGate: placingGate })

            }
            // place control2
            if (this.state.placingGate.length === 1) {
                let newPlace = [line, col]
                let control1 = placingGate[0]
                let valid = col === control1[1] && line !== control1[0]
                if (valid) {
                    placingGate.push(newPlace)
                    newccimg[line][col] = 'ccz2'
                    this.setState({ ccimg: newccimg, placingGate: placingGate })
                }
                else { // remove all cx before
                    newccimg[control1[0]][control1[1]] = 'e'
                    this.setState({ ccimg: newccimg, placingGate: Array() })
                }
            }
            // place x
            else if (this.state.placingGate.length === 2) {
                let newPlace: Array<number> = [line, col]
                let control1: Array<number> = placingGate[0]
                let control2: Array<number> = placingGate[1]
                let valid = col === control1[1] && line !== control1[0] && line !== control2[0]
                if (valid) {
                    placingGate.push(newPlace)

                    // find index of top, med, bottom line
                    let top: number = Math.min(control1[0], control2[0], newPlace[0])
                    let bottom: number = Math.max(control1[0], control2[0], newPlace[0])
                    let med: number = [control1[0], control2[0], newPlace[0]].find(el => el !== top && el !== bottom)!

                    if (top === newPlace[0]) newccimg[top][col] = 'ccz0'
                    else newccimg[top][col] = 'ccz2'
                    if (bottom === newPlace[0]) newccimg[bottom][col] = 'ccz1'
                    else newccimg[bottom][col] = 'ccz4'
                    if (med === newPlace[0]) newccimg[med][col] = 'ccz00'
                    else newccimg[med][col] = 'ccz5'

                    let forPush = [[control1[0], control1[1]], [control2[0], control2[1]], [line, col]]

                    // add line between c and x
                    let i = Math.min(control1[0], control2[0], newPlace[0]) + 1
                    let j = Math.max(control1[0], control2[0], newPlace[0])
                    console.log(i, j)
                    while (i < j) {
                        if (i !== control1[0] && i !== control2[0] && i !== newPlace[0]) {
                            newccimg[i][col] = 'ccz3'
                            forPush.push([i, col])
                        }
                        i += 1
                    }

                    multipleGate.push(forPush)
                    const newgate = {
                        gate: 'ccz',
                        line: [control1[0], control2[0], newPlace[0]],
                        col: newPlace[1]
                    }
                    cc = [...cc, newgate] // cannot apply ccx gate
                    this.setState({ ccimg: newccimg, cc: cc, placingGate: Array(), multipleGate: multipleGate }) // clear Placing Gate, Add Miltiple Gate
                }
                else { // remove all ccx before
                    newccimg[control1[0]][control1[1]] = 'e'
                    newccimg[control2[0]][control2[1]] = 'e'
                    this.setState({ ccimg: newccimg, placingGate: Array() })
                }
            }
        }

        else if (this.state.active === 'ccx') {
            console.log(placingGate.length)
            // place control1
            if (this.state.placingGate.length === 0) {
                let newPlace = [line, col]
                placingGate.push(newPlace)
                newccimg[line][col] = 'ccx2'
                this.setState({ ccimg: newccimg, placingGate: placingGate })

            }
            // place control2
            if (this.state.placingGate.length === 1) {
                let newPlace = [line, col]
                let control1 = placingGate[0]
                let valid = col === control1[1] && line !== control1[0]
                if (valid) {
                    placingGate.push(newPlace)
                    newccimg[line][col] = 'ccx2'
                    this.setState({ ccimg: newccimg, placingGate: placingGate })
                }
                else { // remove all cx before
                    newccimg[control1[0]][control1[1]] = 'e'
                    this.setState({ ccimg: newccimg, placingGate: Array() })
                }
            }
            // place x
            else if (this.state.placingGate.length === 2) {
                let newPlace: Array<number> = [line, col]
                let control1: Array<number> = placingGate[0]
                let control2: Array<number> = placingGate[1]
                let valid = col === control1[1] && line !== control1[0] && line !== control2[0]
                if (valid) {
                    placingGate.push(newPlace)

                    // find index of top, med, bottom line
                    let top: number = Math.min(control1[0], control2[0], newPlace[0])
                    let bottom: number = Math.max(control1[0], control2[0], newPlace[0])
                    let med: number = [control1[0], control2[0], newPlace[0]].find(el => el !== top && el !== bottom)!

                    if (top === newPlace[0]) newccimg[top][col] = 'ccx0'
                    else newccimg[top][col] = 'ccx2'
                    if (bottom === newPlace[0]) newccimg[bottom][col] = 'ccx1'
                    else newccimg[bottom][col] = 'ccx4'
                    if (med === newPlace[0]) newccimg[med][col] = 'ccx00'
                    else newccimg[med][col] = 'ccx5'

                    let forPush = [[control1[0], control1[1]], [control2[0], control2[1]], [line, col]]

                    // add line between c and x
                    let i = Math.min(control1[0], control2[0], newPlace[0]) + 1
                    let j = Math.max(control1[0], control2[0], newPlace[0])
                    console.log(i, j)
                    while (i < j) {
                        if (i !== control1[0] && i !== control2[0] && i !== newPlace[0]) {
                            newccimg[i][col] = 'ccx3'
                            forPush.push([i, col])
                        }
                        i += 1
                    }

                    multipleGate.push(forPush)
                    const newgate = {
                        gate: 'ccx',
                        line: [control1[0], control2[0], newPlace[0]],
                        col: newPlace[1]
                    }
                    cc = [...cc, newgate] // cannot apply ccx gate
                    this.setState({ ccimg: newccimg, cc: cc, placingGate: Array(), multipleGate: multipleGate }) // clear Placing Gate, Add Miltiple Gate
                }
                else { // remove all ccx before
                    newccimg[control1[0]][control1[1]] = 'e'
                    newccimg[control2[0]][control2[1]] = 'e'
                    this.setState({ ccimg: newccimg, placingGate: Array() })
                }
            }
        }
        else { // Single Qubit Gate
            newccimg[line][col] = this.state.active

            if (this.state.active !== 'e') {
                const newgate = {
                    gate: this.state.active,
                    line,
                    col
                }
                cc = [...cc, newgate]
            }

            this.setState({ cc: cc, ccimg: newccimg })
        }
    }

    reset = () => {
        let ccimg = [this.eLine.slice(), this.eLine.slice()]
        let cc = Array()
        let placingGate = Array()
        let multipleGate = Array()
        this.setState({ ccimg: ccimg, cc: cc, placingGate: placingGate, multipleGate: multipleGate, n: 2 })
    }

    addQubit = () => {
        console.log(this.state)
        let ccimg = this.state.ccimg
        ccimg.push(this.eLine.slice())
        let n = this.state.n + 1
        this.setState({ ccimg: ccimg, n: n })
    }

    removeQubit = () => {
        let ccimg = this.state.ccimg
        let removeIndex = Array()
        let multipleGate = this.state.multipleGate
        multipleGate.forEach((gate, index) => {
            if (gate.findIndex(subgate => subgate[0] === this.state.n - 1) !== -1) {
                removeIndex.push(index)
            }
        })

        for (var i = removeIndex.length - 1; i >= 0; i--) {
            multipleGate[removeIndex[i]].forEach(img => {
                ccimg[img[0]][img[1]] = 'e'
            })
            multipleGate.splice(removeIndex[i], 1);
        }
        console.log(multipleGate.length)
        ccimg.pop()
        let n = this.state.n - 1
        let cc = this.state.cc.filter(el => el.line < n || (Array.isArray(el.line) && !el.line.includes(n)))
        // console.log(cc)
        this.setState({ ccimg: ccimg, cc: cc, n: n, multipleGate: multipleGate })
    }

    shotChange = (shot) => (this.setState({ selectShot: shot }))

    render() {
        return (

            <div className="composer" id={this.props.quiz ? "quiz" : "none"} >
                <br />
                {/* <p className="large">Active: {this.state.active}</p> */}

                <div style={{ display: 'block' }}>
                    <div>

                        <div className="gates" id={this.props.quiz ? "quiz" : "none"}>
                            {Object.keys(image).map(key => {
                                return !this.props.remove!.includes(key) && <img src={image[key]} onClick={(e) => this.activate(e, key)} alt="gate" />
                            })}
                        </div>
                        <br />
                        {this.state.ccimg.map((line, l: number) => {
                            return (
                                <Row className="rows" id={this.props.quiz ? "quiz" : "none"}>
                                    <img src={qubit[l]} id="first" alt="qubit" />
                                    {line.map((col: string, c: number) => {
                                        return <img id="middle" src={imageInuse[col]} onClick={() => this.place(l, c)} alt="line" />
                                    })}
                                    <img src={m} id="last" alt="measure" />
                                </Row>
                            )
                        })}

                    </div>


                    <div style={{ position: 'relative' }} className="buttonPanel" id={this.props.quiz ? "quiz" : "none"}>
                        <button className="btn btn-primary" id="buttonPanel" onMouseDown={() => this.click.play()} onClick={this.run}>วัดค่าคิวบิต</button>
                        <button className="btn btn-primary" id="buttonPanel" onMouseDown={() => this.click.play()} onClick={this.reset}>รีเซ็ต</button>
                        {!this.props.quiz && <button className="btn btn-primary" id="buttonPanel" disabled={this.state.n > 4} onMouseDown={() => this.click.play()} onClick={this.addQubit}>เพิ่มคิวบิต</button>}
                        {!this.props.quiz && <button className="btn btn-primary" id="buttonPanel" disabled={this.state.n < 2} onMouseDown={() => this.click.play()} onClick={this.removeQubit}>ลดคิวบิต</button>}

                        <div style={{ float: 'left', margin: '-5px 20px', borderRadius: '10px', border: 'solid 1px #A29BFE', padding: '5px 5px 5px' }}>
                            <button className="btn btn-primary btn-shot" id="buttonPanel" disabled >จำนวนช็อต</button>
                            <div className="radioPanel">
                                {/* <label className="shot">จำนวนช็อต</label> */}
                                <div className="form-check form-check-inline">
                                    <input type="radio" onChange={() => this.shotChange(1)} name="inlineRadioOptions" />
                                    <span className="checkmark"></span>
                                    <label className="form-check-label" >{1}</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio" onChange={() => this.shotChange(100)} checked={this.state.selectShot === 100} name="inlineRadioOptions" />
                                    <label className="form-check-label"  >{100}</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio" onChange={() => this.shotChange(1000)} name="inlineRadioOptions" />
                                    <label className="form-check-label">{1000}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        display: this.props.quiz ? 'flex' : 'flex',
                        background: 'rgb(255,255,255,0.8)',
                        width: this.props.quiz ? '500px' : '750px',
                        height: this.props.quiz ? '130px' : '275px',
                        position: 'relative',
                        marginTop: '80px',
                        marginLeft: this.props.quiz ? '270px' : '0'
                    }}>
                        <Bar
                            data={this.state.result}
                            width={this.props.quiz ? 500 : 750}
                            height={this.props.quiz ? 130 : 275}
                            options={{
                                responsive: false,
                                maintainAspectRatio: false,
                                title: {
                                    display: false
                                },
                                legend: {
                                    display: false
                                },
                                scales: {
                                    xAxes: [{
                                        barPercentage: 0.5
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true,
                                            min: 0,
                                            max: this.state.shot
                                        }
                                    }]
                                }
                            }}
                        />
                        {!this.props.quiz &&
                            <QubieWrapper>
                                <Fly>
                                    <img src={Qubie} style={{ position: 'static', height: '300px' }} />
                                </Fly>
                            </QubieWrapper>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Composer;