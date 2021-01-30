import React, {useEffect, useState} from 'react';
import {Iuser} from '../../type.modal'
import { Link, useRouteMatch, Redirect } from 'react-router-dom';
import padlock from '../../assets/explore/padlock.png'
import backIcon from '../../assets/explore/backIcon.png'

const ulStyle = {
  listStyleType: 'none',
  margin: '75px auto',
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
  paddingLeft: '30px',
  paddingTop: '25px',
  cursor: 'pointer'
} as React.CSSProperties;

const liStyleDisable = {...liStyle,backgroundColor:'#7AB175',position:'relative'} as React.CSSProperties;

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
  fontSize: '30px',
  color: '#000000',
} as React.CSSProperties;

interface IProps {user:Iuser & any,detail:{chapter:number,title:string[]}}

export default function MenuUnit(props:IProps) {
  let { url } = useRouteMatch();

  const [hover,changeHover] = useState(-1)

  const items = [{
    path: url+'/unit-1',
    text: props.detail.title[0]
  }, {
    path: url+'/unit-2',
    text: props.detail.title[1]
  }, {
    path: url+'/unit-3',
    text: props.detail.title[2]
  }, {
    path: url+'/quiz',
    text: props.detail.title[3]
  }]
  return (
    <ul style={ulStyle}>
      {items.map((item,index) => (
       props.user.chapter! > props.detail.chapter-1 || (props.user.chapter! == props.detail.chapter-1 && props.user.unit! >= index)
       ? <Link to={item.path} style={linkStyle} >
        <li key={item.path} className= "mapmenu__item" style={hover==index?liStyleHover:liStyle} onMouseEnter={()=>changeHover(index)} onMouseLeave={()=>changeHover(-1)}>
         <p>{item.text}</p>
         </li>
         </Link> 
       :<li key={item.path} className= "mapmenu__item" style={liStyleDisable}>
       <p style={linkStyle}>{item.text}</p>
       <img src={padlock} style={padlockStyle}/>
       </li>
      ))}
    </ul>
  )
}