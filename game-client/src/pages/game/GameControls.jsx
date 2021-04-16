import { Button, Nav, Navbar } from 'react-bootstrap';
import React from 'react';

export default function GameControls({ id }) {
  const onPlay = () => {
    console.log();
  };

  return (
    <>
      <Navbar>
        <Nav>
          <Button variant='info' onClick={onPlay}>
            <i className='fas fa-dice-six mr-2'> </i>Start</Button>
        </Nav>
      </Navbar>
    </>
  );
}
