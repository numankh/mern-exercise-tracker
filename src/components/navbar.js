import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


export default class MyNavbar extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">ExcerTracker</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Exercises</Nav.Link>
          <Nav.Link href="/create">Create Exercise Log</Nav.Link>
          <Nav.Link href="/user">Create User</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}