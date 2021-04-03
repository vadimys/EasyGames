import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import gamesActions from '../../redux/actions/GamesActions';
import { Badge, Button, Card, Nav, Navbar, Spinner } from 'react-bootstrap';
import { UserControls } from './UserControls';
import { MainInfo } from './MainInfo';

export function Games() {
  const dispatch = useDispatch();
  const { isGot, list } = useSelector(state => state.allGames);
  const { isLoggedIn, user } = useSelector(state => state.authentication);

  useEffect(() => {
    dispatch(gamesActions.getAll(list, user && user._id));
  }, []);

  return (
    <>
      {isGot ?
        list.map((data) =>
          <Card key={data._id} className='mb-3' border='info'>
            <Card.Header as={'h3'} className='text-center'>
              <Card.Subtitle className='text-right'>
                {!data.isAvailable && <Badge pill variant='danger'>Coming soon</Badge>}
              </Card.Subtitle>
              {data.name}
            </Card.Header>
            <Card.Body>{data.info && <MainInfo data={data.info} />}</Card.Body>
            <Card.Footer>
              <Navbar>
                <Nav className='mr-auto'>
                  <Button variant='info' disabled={!data.isAvailable}>
                    <i className='fas fa-gamepad mr-2'> </i>PLAY</Button>
                </Nav>
                {isLoggedIn && data.isAvailable && <UserControls id={data.id} />}
              </Navbar>
            </Card.Footer>
          </Card>
        ) :
        <Spinner animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>}
    </>
  );
}
