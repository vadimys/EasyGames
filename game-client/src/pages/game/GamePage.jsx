import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Button, Card, Nav, Navbar } from 'react-bootstrap';
import gameData from '../../helpers/GameData';
import { useDispatch, useSelector } from 'react-redux';
import gameActions from '../../redux/actions/GameActions';
import { NewGame } from './NewGame';

export function GamePage() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.games);
  const onPlay = () => {

  };

  useEffect(() => {
    list.length === 0 && dispatch(gameActions.getGames());
  }, []);

  return (
    <Card className='text-center' border='success'>
      <Card.Header as={'h3'}>{gameData.getName(id)}</Card.Header>
      <Card.Body><NewGame id={id} /></Card.Body>
      <Card.Footer>
        <Navbar>
          <Nav>
            <Button variant='info' onClick={onPlay}>
              <i className='fas fa-dice-six mr-2'> </i>New game</Button>
          </Nav>
        </Navbar>
      </Card.Footer>
    </Card>);
}
