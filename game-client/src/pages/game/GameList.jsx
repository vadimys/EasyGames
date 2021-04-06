import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import gameActions from '../../redux/actions/GameActions';
import { Spinner } from 'react-bootstrap';
import { Game } from './Game';

export function GameList() {
  const dispatch = useDispatch();
  const { isGot, list } = useSelector(state => state.games);

  useEffect(() => {
    dispatch(gameActions.getGames());
  }, []);

  return (
    <>
      {isGot ? list.map(data => <Game key={data.id} id={data.id} />) :
        <Spinner animation='border' role='status' variant="info">
          <span className='sr-only'>Loading...</span>
        </Spinner>}
    </>
  );
}
