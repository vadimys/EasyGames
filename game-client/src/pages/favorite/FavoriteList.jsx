import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import gamesActions from '../../redux/actions/GamesActions';
import { Favorite } from './Favorite';

export function FavoriteList() {
  const dispatch = useDispatch();
  const { favorite } = useSelector(state => state.games);
  const { user } = useSelector(state => state.authentication);

  useEffect(() => {
    dispatch(gamesActions.getAll(user && user._id));
  }, []);

  return (
    <>
      {favorite.length > 0 ? favorite.map((id) => <Favorite key={id} id={id} />) :
        <Spinner animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>}
    </>
  );
}
