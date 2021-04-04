import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import gamesActions from '../../redux/actions/GamesActions';
import { Spinner } from 'react-bootstrap';
import { Game } from './Game';

export function GameList() {
  const dispatch = useDispatch();
  const { isGot, list } = useSelector(state => state.games);
  const { user } = useSelector(state => state.authentication);

  useEffect(() => {
    dispatch(gamesActions.getAll(user && user._id));
  }, []);

  return (
    <>
      {isGot ? list.map(data => <Game key={data.id} id={data.id} />) :
        <Spinner animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>}
    </>
  );
}
