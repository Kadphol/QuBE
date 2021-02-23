import React, {useState} from 'react';
import {Iuser} from '../../type.modal'
import { Link, useRouteMatch } from 'react-router-dom';
import padlock from '../../assets/explore/padlock.png'
import useSound from 'use-sound'

const sfx = require('../../assets/sound/sfx_click.mp3').default

const ulStyle = {
  listStyleType: 'none',
  margin: 'auto',
  padding: 0,
  position: 'relative',
  top: '7%',
  width: '520px'
} as React.CSSProperties;

const liStyle = {
  backgroundColor: '#9CF495',
  marginBottom: '31px',
  height: '100px',
  borderRadius: '10px',
  textAlign: 'left',
  paddingLeft: '70px',
  paddingTop: '15px',
  cursor: 'pointer'
} as React.CSSProperties;

const liStyleDisable = {
  backgroundColor: '#7AB175',
  marginBottom: '31px',
  height: '100px',
  borderRadius: '10px',
  textAlign: 'left',
  paddingLeft: '70px',
  paddingTop: '15px',
  position: 'relative'
} as React.CSSProperties;

const liStyleHover = {...liStyle,backgroundColor:'#7AB175'}

const padlockStyle = {
  position:'absolute',
  width: 'auto',
  height: '80px',
  top:'10px',
  left:'220px'
} as React.CSSProperties;

const linkStyle = {
  textDecoration: 'none',
  fontFamily: 'Kanit',
  fontSize: '45px',
  color: '#000000',
} as React.CSSProperties;

export default function MenuChapter(user:Iuser) {
  let { url } = useRouteMatch();

  const [hover,changeHover] = useState(-1)
  const audio = new Audio(sfx)


  const items = [{
    path: url+'/chapter-1/intro',
    text: "บทที่ 1: พื้นฐาน"
  }, {
    path: url+'/chapter-2/intro',
    text: "บทที่ 2: คิวบิต"
  }, {
    path: url+'/chapter-3/intro',
    text: "บทที่ 3: มาตรวัด"
  }, {
    path: url+'/chapter-4/intro',
    text: "บทที่ 4: ควอนตัมเกต"
  }, {
    path: url+'/chapter-5/intro',
    text: "บทที่ 5: อัลกอริทึม"
  }]
  return (
    <ul style={ulStyle}>
      {items.map((item,index) => (
       user.chapter! >= index
       ? <Link to={item.path} style={linkStyle} >
       <li key={item.path} className= "mapmenu__item" onMouseDown={()=>audio.play()} style={hover==index?liStyleHover:liStyle} onMouseEnter={()=>changeHover(index)} onMouseLeave={()=>changeHover(-1)}>
         <p>{item.text}</p>
         </li>
         </Link>
       :<li key={item.path} className= "mapmenu__item" style={liStyleDisable}>
       <p style={linkStyle}>{item.text}</p>
       <img src={padlock} style={padlockStyle} alt="locking content"/>
       </li>
      ))}
    </ul>
  )
}