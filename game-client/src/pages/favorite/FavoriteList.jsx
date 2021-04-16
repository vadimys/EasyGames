import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { Favorite } from './Favorite';
import gameActions from '../../redux/actions/GameActions';
import alertActions from '../../redux/actions/AlertActions';
import { useHistory } from 'react-router-dom';

export function FavoriteList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showAlert, setShowAlert] = useState(false);
  const { alert } = useSelector(state => state);
  const { list, favorite } = useSelector(state => state.games);

  useEffect(() => {
    list.length === 0 && dispatch(gameActions.getGames());
  }, []);

  useEffect(() => {
    if (alert.message) {
      const timer = setTimeout(() => {
        setShowAlert(false);
        dispatch(alertActions.clear());
        history.push('/');
      }, 2000);

      setShowAlert(true);

      return () => clearTimeout(timer);
    }
  }, [alert.message]);

  return (
    <>
      {favorite.length > 0
        ? favorite.map((id) => <Favorite key={id} id={id} />)
        : showAlert
          ? <div className={`alert ${alert.type}`}>
            {alert.message}
          </div>
          : <div className='play-area-container'>
            <Spinner animation='border' role='status' variant='info'>
              <span className='sr-only'>Loading...</span>
            </Spinner>
          </div>}
    </>
  );
}
