import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import map from '../../assets/explore/map1.png';

const Menu = styled.div`
  background: url(${map});
  width: 1240px;
  height: 720px;
  text-align: center;
`;

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
  mapmenu__item: {
    "&:hover": {
      backgroundColor: '#7AB175'
    }
  }
} as React.CSSProperties;

const linkStyle = {
  textDecoration: 'none',
  fontFamily: 'Kanit',
  fontSize: '45px',
  color: '#000000',
} as React.CSSProperties;

export default function MenuMap() {
  let { path, url } = useRouteMatch();

  const items = [{
    path: url+'/chapter-1',
    text: "บทที่ 1: พื้นฐาน"
  }, {
    path: url+'/chapter-2',
    text: "บทที่ 2: คิวบิต"
  }, {
    path: url+'/chapter-3',
    text: "บทที่ 3: มาตรวัด"
  }, {
    path: url+'/chapter-4',
    text: "บทที่ 4: ควอนตัมเกต"
  }, {
    path: url+'/chapter-5',
    text: "บทที่ 5: อัลกอริทึม"
  }]
  return (
    <Menu >
      <ul style={ulStyle}>
        {items.map(item => (
          <li key={item.path} className= "mapmenu__item" style={liStyle}>
            <Link to={item.path} style={linkStyle}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </Menu>
  )
}