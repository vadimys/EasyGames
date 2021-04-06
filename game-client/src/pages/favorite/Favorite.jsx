import { Button, Card, Nav, Navbar, Modal } from 'react-bootstrap';
import gameData from '../../helpers/GameData';
import gameInfo from '../../helpers/GameData';
import React, { useState } from 'react';
import { UserControls } from '../game/UserControls';
import MainInfo from '../game/MainInfo';

export function Favorite({ id }) {
  const [showInfo, setShowInfo] = useState(false);
  const isAvailable = gameInfo.isAvailable(id);

  return (
    <>{isAvailable ?
      <Card className='mb-3' border='success'>
        <Navbar>
          <Nav className='mr-auto'>
            <h3>{gameData.getName(id)}</h3>
          </Nav>
          <Button variant='info' className='mr-3'>
            <i className='fas fa-gamepad mr-2'> </i>Play
          </Button>
          <Button variant='info' className='mr-3' onClick={() => setShowInfo(true)}>
            <i className='fas fa-info mr-2'> </i>Info
          </Button>
          <UserControls id={id} isFull={false} />
          <Modal size="xl" show={showInfo} onHide={() => setShowInfo(false)}
                 aria-labelledby='contained-modal-title-vcenter' centered>
            <Modal.Header closeButton>
              <Modal.Title id='contained-modal-title-vcenter' className='h2 text-info'>
                {gameData.getName(id)}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body><MainInfo id={id} /></Modal.Body>
          </Modal>
        </Navbar>
      </Card> : null}
    </>
  );
}
