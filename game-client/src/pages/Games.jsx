import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import gamesActions from '../redux/actions/GamesActions';
import { Badge, Button, Card, Nav, Navbar, Spinner } from 'react-bootstrap';
import parser from 'react-html-parser';
import types from '../redux/constants';

export function Games() {
  const dispatch = useDispatch();
  const { gamesGot, games } = useSelector(state => state.allGames);
  const { isLoggedIn, user } = useSelector(state => state.authentication);
  const onIcon = (data, event) => {
    dispatch(gamesActions.updateGameType({
      id: data.id,
      value: event.currentTarget.id === types.FAVORITE ? !data.isFavorite : !data.isLike,
      type: event.currentTarget.id
    }));
  };

  useEffect(() => {
    dispatch(gamesActions.getAll(user && user._id));
  }, []);

  return (
    <>
      {gamesGot ?
        games.map((data) =>
          <Card key={data._id} className='mb-3' border='info'>
            <Card.Header as={'h3'} className='text-center'>
              <Card.Subtitle className='text-right'>
                {!data.isAvailable && <Badge pill variant='danger'>
                  Coming soon
                </Badge>}
              </Card.Subtitle>
              {data.name}
            </Card.Header>
            <Card.Body>
              {data.players &&
              <>
                <Card.Title>{data.players.amount}</Card.Title>
                {data.players.text && <Card.Text>{data.players.text}</Card.Text>}
              </>}
              {data.description &&
              <>
                <Card.Title>Description</Card.Title>
                <Card.Text>{parser(data.description)}</Card.Text>
              </>}
              {data.history &&
              <>
                <Card.Title>History</Card.Title>
                <Card.Text>{parser(data.history)}</Card.Text>
              </>}
            </Card.Body>
            <Card.Footer>
              <Navbar>
                <Nav className='mr-auto'>
                  <Button variant='info' disabled={!data.isAvailable}><i
                    className='fas fa-gamepad mr-2'> </i>PLAY</Button>
                </Nav>
                {isLoggedIn && data.isAvailable &&
                <span className='bookmark'><i id={types.FAVORITE} className={`${data.isFavorite ? 'fas' : 'far'} fa-bookmark fa-2x mr-5`}
                   onClick={onIcon.bind(this, data)}> </i></span>}
                {isLoggedIn && data.isAvailable &&
                <span className='thumbs-up'><i id={types.LIKE} className={`${data.isLike ? 'fas' : 'far'} fa-thumbs-up fa-2x mr-2`}
                   onClick={onIcon.bind(this, data)}> </i></span>}
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
