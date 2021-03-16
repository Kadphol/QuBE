import React, { useState } from 'react';

const sfxClick = require('@assets/sound/sfx_click.mp3').default

  interface IProps { button: Boolean, buttonColor: String, boxColor: String, textColor: String, text: String, next:any, chapter: String, title: String }

  export default function ChapterBox(props: IProps) {

    
const OuterBox = {
position: 'absolute',
width: '700px',
height: '400px',
left: '270px',
top: '163px',
background: props.boxColor,
borderRadius: '20px',
} as React.CSSProperties

const InnerBox = {
position: 'absolute',
width: '600px',
height: '300px',
left: '50px',
top: '50px',
background: 'white',
borderRadius: '20px',
} as React.CSSProperties

const Button = {
    position: 'absolute',
    width: '200px',
    height: '50px',
    top: '200px',
    left: '200px',
    borderRadius: '50px',
    fontFamily: 'Kanit',
    fontStyle: 'normal',
    fontSize: '25px',
    lineHeight: '50px',
    cursor:'pointer',
    textDecoration: 'none',
    background: props.buttonColor,
    color: 'white',
  } as React.CSSProperties

  const text = {
    position: 'absolute',
    width: '600px',
    height: '79px',
    left: '0',
    fontFamily: 'Kanit',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '35px',
    lineHeight: '75px',
    textAlign: 'center',
    color: props.textColor,
  } as React.CSSProperties;

  const title = { ...text, top: '100px' }
  const chapter = { ...text, top: '25px', fontSize:'50px' }

    const click = new Audio(sfxClick)

        return (
                <div style={OuterBox}>
                    <div style={InnerBox}>
                    <span style={chapter}>บทที่ {props.chapter}</span>
                    <span style={title}>{props.title}</span>
                    {props.button && <div style={Button} onMouseDown={()=>click.play()} onClick={props.next}>{props.text}</div>}
                    </div>
                </div>);
        }
