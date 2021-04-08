import { Button, Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import { UserControls } from './UserControls';
import { useSelector } from 'react-redux';
import gameInfo from '../../helpers/GameData';
import { useHistory } from 'react-router-dom';

export default function Controls({ id }) {
  const history = useHistory();
  const { isLoggedIn } = useSelector(state => state.login);
  const isAvailable = gameInfo.isAvailable(id);

  return (
    <Navbar>
      <Nav className='mr-auto'>
        <Button variant='info' disabled={!isAvailable} onClick={() => history.push(`/game/${id}`)}>
          <i className='fas fa-gamepad mr-2'> </i>Play</Button>
      </Nav>
      {isLoggedIn && isAvailable && <UserControls id={id} isFull />}
    </Navbar>
  );
}
