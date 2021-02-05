import React, {useState} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ReactComponent as Dragon} from '../../svg/Dragon.svg'
import { ReactComponent as Qubie} from '../../svg/Qubie-intro.svg'
<<<<<<< HEAD
import styled from 'styled-components'
import { relative } from 'path';
const sfxClick = require('../../assets/sound/sfx_click.mp3').default
=======
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e

const ulStyle = {
  listStyleType: 'none',
  margin: 'auto',
  padding: 0,
  position: 'relative',
  display: 'flex',
} as React.CSSProperties;

const liStyle = {
  backgroundColor: '#9CF495',
  marginBottom: '31px',
  height: '100px',
  width: 'auto',
  borderRadius: '10px',
  textAlign: 'center',
  paddingTop: '15px',
  margin: '100px 20px',
} as React.CSSProperties;

const liStyleHover = {...liStyle,backgroundColor: '#7AB175'};

const linkStyle = {
  textDecoration: 'none',
  fontFamily: 'Kanit',
  fontSize: '45px',
  color: '#000000',
  textAlign: 'center',
  padding: '10px'
} as React.CSSProperties;

const column = {    
    position: 'relative',
    width: 'auto',
    display: 'flex',
} as React.CSSProperties;

const character = {
    width:'300px',
<<<<<<< HEAD
    height:'auto',
=======
    height:'100%',
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e
    padding: '10px',
    transform: 'rotate(5deg)'
} as React.CSSProperties;


export default function Menu() {
  let { url } = useRouteMatch();

  const [ hover, setHover ] = useState([false,false]);
<<<<<<< HEAD
  const  click = new Audio(sfxClick)
=======
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e

  return (
    <ul style={ulStyle}>
        
        <div style={column}>
        <Qubie className={hover[1]?"svg-qubie-intro":""} style={character}/>
<<<<<<< HEAD
        <div className= "mapmenu__item" style={hover[1]?liStyleHover:liStyle} 
        onMouseDown={()=>click.play()}
        onMouseEnter={()=>setHover([false,true])} 
        onMouseLeave={()=>setHover([false,false])}>
=======
        <div className= "mapmenu__item" style={hover[1]?liStyleHover:liStyle} onMouseEnter={()=>setHover([false,true])} onMouseLeave={()=>setHover([false,false])}>
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e
          <Link to={url+'/leaderboard'} style={linkStyle}>กระดานคะแนน</Link>
        </div>
        </div>

        <div style={column}>
<<<<<<< HEAD
        <div className= "mapmenu__item" style={hover[0]?liStyleHover:liStyle} 
        onMouseDown={()=>click.play()}
        onMouseEnter={()=>setHover([true,false])} 
        onMouseLeave={()=>setHover([false,false])}>
=======
        <div className= "mapmenu__item" style={hover[0]?liStyleHover:liStyle} onMouseEnter={()=>setHover([true,false])} onMouseLeave={()=>setHover([false,false])}>
>>>>>>> 4719a703c12f24615a059db4db2e0b68f6377d0e
          <Link to={url+'/play'} style={linkStyle}>เริ่มต้นท้าทาย</Link>
        </div>
        <Dragon className={hover[0]?"svg-qubie-intro":""} style={character}/>
        </div>

    </ul>
  )
}