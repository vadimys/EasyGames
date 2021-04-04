import { Button, Card, Nav, Navbar } from 'react-bootstrap';
import gameData from '../../helpers/GameData';
import gameInfo from '../../helpers/GameData';
import React from 'react';
import { UserControls } from '../game/UserControls';

export function Favorite({ id }) {
  const isAvailable = gameInfo.isAvailable(id);

  return (
    <>{isAvailable ?
      <Card className='mb-3' border='success'>
        <Navbar>
          <Nav className='mr-auto'>
            <h3>{gameData.getName(id)}</h3>
          </Nav>
          <Button variant='info' className='mr-3'>
            <i className='fas fa-gamepad mr-2'> </i>PLAY</Button>
          <UserControls id={id} isFull={false} />
        </Navbar>
      </Card> : null}
    </>
  );
}
