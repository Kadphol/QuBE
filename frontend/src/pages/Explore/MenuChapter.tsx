import React, {useState} from 'react';
import {Iuser} from '@src/type.modal'
import { Link, useRouteMatch } from 'react-router-dom';
import padlock from '@assets/explore/padlock.png'
import ComingSoonModal from '@components/ComingSoonModal'

import map1 from '@assets/explore/map1.png';
import map2 from '@assets/explore/map2.png';
import map3 from '@assets/explore/map3.png';
import map4 from '@assets/explore/map4.png';
import map5 from '@assets/explore/map5.png';

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

const liStyleList = [{...liStyle,top:'600px',left:'50px',},
                      {...liStyle,top:'220px',left:'80px',},
                      {...liStyle,top:'400px',left:'470px',},
                      {...liStyle,top:'180px',left:'850px',},
                      {...liStyle,top:'450px',left:'900px',}]
const liStyleHover = {...liStyle,backgroundColor:'#7AB175'}
const liStyleListHover = [{...liStyleHover,top:'600px',left:'50px',},
                      {...liStyleHover,top:'220px',left:'80px',},
                      {...liStyleHover,top:'400px',left:'470px',},
                      {...liStyleHover,top:'180px',left:'850px',},
                      {...liStyleHover,top:'450px',left:'900px',}]
const liStyleDisable = {...liStyle,backgroundColor:'#7AB175',filter:'brightness(50%)', cursor:'auto'}
const liStyleListDisable = [{...liStyleDisable,top:'600px',left:'50px',},
                      {...liStyleDisable,top:'220px',left:'80px',},
                      {...liStyleDisable,top:'400px',left:'470px',},
                      {...liStyleDisable,top:'180px',left:'850px',},
                      {...liStyleDisable,top:'450px',left:'900px',}]

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

const map = [map1,map2,map3,map4,map5]

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

  const avaliable = 5

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
  return (
    <React.Fragment>
    <ComingSoonModal show={modalShow} onHide={()=>changeModalShow(false)}/> 
    <ul style={main}>
      {items.map((item,index) => (
       user.chapter! >= index
       ? index <= avaliable-1
       ? <Link to={item.path} style={linkStyle} >
       <li key={index} className= "mapmenu__item" onMouseDown={()=>audio.play()} style={hover===index?liStyleHover:liStyle} onMouseEnter={()=>changeHover(index)} onMouseLeave={()=>changeHover(-1)}>
         <p>{item.text}</p>
         </li>
         </Link>
       : 
       <div onClick={()=>changeModalShow(true)} style={{...linkStyle,cursor:'pointer'}} >
       <li key={index} className= "mapmenu__item" onMouseDown={()=>audio.play()} style={hover===index?liStyleHover:liStyle} onMouseEnter={()=>changeHover(index)} onMouseLeave={()=>changeHover(-1)}>
         <p>{item.text}</p>
         </li>
         </div>
       :<li key={index} className= "mapmenu__item" style={liStyleDisable}>
       <p style={linkStyle}>{item.text}</p>
       <img src={padlock} style={padlockStyle} alt="locking content"/>
       </li>
      ))}
    </ul>
    </React.Fragment>
  )
}