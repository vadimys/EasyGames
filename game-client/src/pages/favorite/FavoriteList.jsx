import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { Favorite } from './Favorite';
import gameActions from '../../redux/actions/GameActions';

export function FavoriteList() {
  const dispatch = useDispatch();
  const { list, favorite } = useSelector(state => state.games);

  useEffect(() => {
    list.length === 0 && dispatch(gameActions.getGames());
  }, []);

  return (
    <>
      {favorite.length > 0 ? favorite.map((id) => <Favorite key={id} id={id} />) :
        <Spinner animation='border' role='status' variant="info">
          <span className='sr-only'>Loading...</span>
        </Spinner>}
    </>
  );
}
