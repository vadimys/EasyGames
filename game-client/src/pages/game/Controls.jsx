import { Button, Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import { UserControls } from './UserControls';
import { useSelector } from 'react-redux';
import gameInfo from '../../helpers/GameData';

export default function Controls({ id }) {
  const { isLoggedIn } = useSelector(state => state.login);
  const isAvailable = gameInfo.isAvailable(id);

  return (
    <Navbar>
      <Nav className='mr-auto'>
        <Button variant='info' disabled={!isAvailable}>
          <i className='fas fa-gamepad mr-2'> </i>PLAY</Button>
      </Nav>
      {isLoggedIn && isAvailable && <UserControls id={id} isFull/>}
    </Navbar>
  );
}
