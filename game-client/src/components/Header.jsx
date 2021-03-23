import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Nav, Navbar } from 'react-bootstrap';
import logo from '../styles/img/logo.svg';

export default function Header() {
  const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);

  return (
    <>
      <Navbar className='navbar-expand-md navbar-dark fixed-top bg-dark'>
        <Navbar.Brand href='/'>
          <img alt="EasyGames" src={logo} width="30" height="30"
               className="d-inline-block align-top mr-2" />EasyGames
        </Navbar.Brand>
        <Nav className='mr-auto'>
          {isLoggedIn && <Nav.Link>Games</Nav.Link>}
        </Nav>
        {isLoggedIn ?
          <>
            <Button variant='outline-light'>Log out</Button>
          </> :
          <>
            <Button href='/login' className='mr-2' variant='outline-light'>Log in</Button>
            <Button href='/register' variant='outline-info'>Sign up</Button>
          </>}
      </Navbar>
    </>
  );
}
