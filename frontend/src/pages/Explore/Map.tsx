import React from 'react';
import styled from 'styled-components';

import map from '../../assets/explore/chapter1/BackgroundFar.png';

const Menu = styled.div`
  background: url(${map});
  width: 1240px;
  height: 720px;
  text-align: center;
  margin: auto;
`;

export default function Map({ children }) {
  return (
    <Menu>
      { children }
    </Menu>
  );
}