import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
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