import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import map from '../../assets/explore/map1.png';

const Menu = styled.div`
  background: url(${map});
  width: 1240px;
  height: 720px;
`;

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
      <ul>
        {items.map(item => (
          <li key={item.path} className= "mapmenu__item">
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </Menu>
  )
}