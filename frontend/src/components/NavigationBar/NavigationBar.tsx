import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './NavigationBar.css';

class NavigationBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light">
          <Navbar.Brand href="/">QuBE</Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="justify-content-end ml-auto" defaultActiveKey="/">
              <Nav.Link href="/">เริ่มต้นกับควอนตัม</Nav.Link>
              <Nav.Link href="/explore">ผจญภัยในโลกควอนตัม</Nav.Link>
              <Nav.Link href="/playground">สนามฝึกซ้อมควอนตัม</Nav.Link>
              <Nav.Link href="/challenge">ท้าทายกับควอนตัม</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavigationBar;