import React, { useState } from "react";
import styled, {keyframes} from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import Qubie from '@assets/challenge/Qubie.png'
import king from '@assets/challenge/king.png'
import dragon from '@assets/challenge/dragonBlack.png'
import ComingSoonModal from '@components/ComingSoonModal'
const sfxClick = require("@assets/sound/sfx_click.mp3").default;

const ulStyle = {
  listStyleType: "none",
  margin: "auto",
  padding: 0,
  position: "relative",
} as React.CSSProperties;

const liStyle = {
  backgroundColor: "#9CF495",
  marginBottom: "31px",
  height: "100px",
  width: "auto",
  borderRadius: "10px",
  textAlign: "center",
  paddingTop: "15px",
  margin: "20px 20px 20px",
} as React.CSSProperties;

const liStyleHover = { ...liStyle, backgroundColor: "#7AB175" };

const linkStyle = {
  textDecoration: "none",
  fontFamily: "Kanit",
  fontSize: "45px",
  color: "#000000",
  textAlign: "center",
} as React.CSSProperties;

const bar = {
  position: "relative",
  width: "500px",
  height: "140px",
  clear: "both",
} as React.CSSProperties;

const character = {
  // border:'solid green',
  position: 'absolute',
  width: "auto",
  height: "100%",
  top: '-30px',
  left: '-80px',
  transform: "rotate(5deg)",
} as React.CSSProperties;

const Fly = styled.div`
    animation: ${keyframes`
    from, to {transform: translateY(0px)}
    50% {transform: translateY(30px)}
    `} 2.5s infinite forwards
`

export default function Menu() {
  let { url } = useRouteMatch();

  const [hover, setHover] = useState(-1);
  const [modalShow, changeModalShow] = useState(false);
  const click = new Audio(sfxClick);

  return (
    <ul style={ulStyle}>

      <div style={bar}>
        <Link to={url + "/play"} style={linkStyle}>
        <div
          className="mapmenu__item"
          style={hover === 0 ? liStyleHover : liStyle}
          onMouseDown={() => click.play()}
          onMouseEnter={() => setHover(0)}
          onMouseLeave={() => setHover(-1)}
        >
            เริ่มต้นท้าทาย
        </div>
        </Link>
        <img src={dragon}
          className={hover === 0 ? "svg-qubie-intro" : ""}
          style={character}
        />
      </div>

      <div style={bar}>
      <img src={Qubie}
          className={hover === 1 ? "svg-qubie-intro" : ""}
          style={character}
        />
        <Link to={url + "/leaderboard"} style={linkStyle}>
        <div
          className="mapmenu__item"
          style={hover === 1 ? liStyleHover : liStyle}
          onMouseDown={() => click.play()}
          onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover(-1)}
        >
            กระดานคะแนน
        </div> 
        </Link>
      </div>

      <div style={bar}> 
      <Link to={url + "/howtoplay"} style={linkStyle}>
      <ComingSoonModal show={modalShow} onHide={()=>changeModalShow(false)}/>
      {/* <div onClick={()=>changeModalShow(true)} style={{...linkStyle,cursor:'pointer'}}> */}
        <div
          className="mapmenu__item"
          style={hover === 2 ? liStyleHover : liStyle}
          onMouseDown={() => click.play()}
          onMouseEnter={() => setHover(2)}
          onMouseLeave={() => setHover(-1)}
        >
            วิธีการเล่น
        </div>
        {/* </div> */}
        </Link>
        <img src={king}
          className={hover === 2 ? "svg-qubie-intro" : ""}
          style={character}
        />
      </div>
    </ul>
  );
}
