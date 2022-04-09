import React, {useState,useEffect} from 'react';
import {Iuser} from '@src/type.modal'
import { Link, useRouteMatch } from 'react-router-dom';
import padlock from '@assets/explore/padlock.png'
import ComingSoonModal from '@components/ComingSoonModal'
import styled, { keyframes } from 'styled-components';

import axios from '@config/axiosconfig';
import ENDPOINT from '@config/endpoint';

import map1 from '@assets/explore/map1.png';
import map2 from '@assets/explore/map2.png';
import map3 from '@assets/explore/map3.png';
import map4 from '@assets/explore/map4.png';
import map5 from '@assets/explore/map5.png';
import map6 from '@assets/explore/map6.png';
import Qubie from '@assets/explore/Qubie.png';
import Princess from '@assets/explore/chapter5/princess.png'

var avaliable = 0;

const sfx = require('@assets/sound/sfx_click.mp3').default

const liStyle = {
  listStyleType: 'none',
  position: 'absolute',
  backgroundColor: '#9CF495',
  width:'250px',
  height: '60px',
  lineHeight: '60px',
  borderRadius: '10px',
  textAlign: 'center',
  cursor: 'pointer'
} as React.CSSProperties;

// const liStyleDisable = {
//   backgroundColor: '#7AB175',
//   marginBottom: '31px',
//   height: '100px',
//   borderRadius: '10px',
//   textAlign: 'left',
//   paddingLeft: '70px',
//   paddingTop: '15px',
//   position: 'relative'
// } as React.CSSProperties;

const liStyleList = [{...liStyle,top:'560px',left:'30px'},
                      {...liStyle,top:'50px',left:'80px',},
                      {...liStyle,top:'180px',left:'550px',},
                      {...liStyle,top:'460px',left:'570px',},
                      {...liStyle,top:'570px',left:'950px',}]
const liStyleHover = {...liStyle,backgroundColor:'#7AB175'}
const liStyleListHover = [{...liStyleHover,top:'560px',left:'30px',},
                      {...liStyleHover,top:'50px',left:'80px',},
                      {...liStyleHover,top:'180px',left:'550px',},
                      {...liStyleHover,top:'460px',left:'570px',},
                      {...liStyleHover,top:'570px',left:'950px',}]
const liStyleDisable = {...liStyle,backgroundColor:'#7AB175',filter:'brightness(50%)', cursor:'auto'}
const liStyleListDisable = [{...liStyleDisable,top:'560px',left:'30px'},
                      {...liStyleDisable,top:'50px',left:'80px',},
                      {...liStyleDisable,top:'180px',left:'550px',},
                      {...liStyleDisable,top:'460px',left:'570px',},
                      {...liStyleDisable,top:'570px',left:'950px',}]

const padlockStyle = {
  position:'absolute',
  width: 'auto',
  height: '40px',
  top:'10px',
  left:'105px'
} as React.CSSProperties;

const linkStyle = {
  textDecoration: 'none',
  fontFamily: 'Kanit',
  fontSize: '25px',
  color: '#000000',
} as React.CSSProperties;

export default function MenuChapter(user:Iuser) {
let { url } = useRouteMatch();

const map = [map1,map2,map3,map4,map5,map6]

const main = {
  background: `url(${map[user.chapter!]})`,
  margin: 'auto',
  padding: 0,
  position: 'relative',
  height:'100%'
} as React.CSSProperties;

  const [hover,changeHover] = useState(-1)
  const [modalShow,changeModalShow] = useState(false)
  const audio = new Audio(sfx)

  const Fly = styled.div`
    animation: ${keyframes`
    from, to {transform: translateY(0px)}
    50% {transform: translateY(30px)}
    `} 2.5s infinite forwards
  `

  const position = [
    {position:'absolute', height:'150px', left: '190px', top:'300px'},
    {position:'absolute', height:'150px', left: '210px', top:'170px'},
    {position:'absolute', height:'150px', left: '470px', top:'280px'},
    {position:'absolute', height:'150px', left: '600px', top:'520px'},
    {position:'absolute', height:'150px', left: '840px', top:'320px'},
    {position:'absolute', height:'150px', left: '1000px', top:'350px'},
  ] as React.CSSProperties[];

  const items = [{
    path: url+'/chapter-1/intro',
    text: "บทที่ 1: พื้นฐาน"
  }, {
    path: url+'/chapter-2/intro',
    text: "บทที่ 2: คิวบิต"
  }, {
    path: url+'/chapter-3/intro',
    text: "บทที่ 3: การวัด"
  }, {
    path: url+'/chapter-4/intro',
    text: "บทที่ 4: ควอนตัมเกต"
  }, {
    path: url+'/chapter-5/intro',
    text: "บทที่ 5: อัลกอริทึม"
  }]

  
  useEffect(() => {
    if(avaliable===0){
      axios.get(`${ENDPOINT.URL}/avaliable`).then((res => {avaliable = res.data.avaliable}))
    }
  });

  return (
    <React.Fragment>
    <ComingSoonModal show={modalShow} onHide={()=>changeModalShow(false)}/> 
    <ul style={main}>
      {items.map((item,index) => (
       user.chapter! >= index
       ? index <= avaliable-1
       ? <Link to={item.path} style={linkStyle} key={index}>
       <li key={item.path} className= "mapmenu__item" onMouseDown={()=>audio.play()} style={hover===index?liStyleListHover[index]:liStyleList[index]} onMouseEnter={()=>changeHover(index)} onMouseLeave={()=>changeHover(-1)}>
         <p>{item.text}</p>
         </li>
         </Link>
       : 
       <div onClick={()=>changeModalShow(true)} style={{...linkStyle,cursor:'pointer'}} >
       <li key={item.path} className= "mapmenu__item" onMouseDown={()=>audio.play()} style={hover===index?liStyleListHover[index]:liStyleList[index]} onMouseEnter={()=>changeHover(index)} onMouseLeave={()=>changeHover(-1)}>
         <p>{item.text}</p>
         </li>
         </div>
       :<li key={item.path} className= "mapmenu__item" style={liStyleListDisable[index]}>
       <p style={linkStyle}>{item.text}</p>
       <img src={padlock} style={padlockStyle} alt="locking content"/>
       </li>
      ))}
      <Fly>
          <img src={user.chapter! >= 5 ? Princess: Qubie} style={{...position[user.chapter!] }} />
      </Fly>
    </ul>
    </React.Fragment>
  )
}