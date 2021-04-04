import React from 'react';
import gamesActions from '../../redux/actions/GamesActions';
import { useDispatch, useSelector } from 'react-redux';
import userControlData from '../../helpers/UserControlData';
import types from '../../redux/constants';

export function UserControls({ id, isFull }) {
  const dispatch = useDispatch();
  const { favorite, like } = useSelector(state => state.games);
  const onIcon = (event) => {
    dispatch(gamesActions.updateGameType({
      id,
      value: event.currentTarget.classList[0] !== 'fas',
      type: event.currentTarget.id
    }));
  };

  const getIconType = (controlId) => {
    const isFavorite = controlId === types.FAVORITE;

    if (isFavorite && favorite) {
      return favorite.indexOf(id) !== -1 ? 'fas' : 'far';
    }

    if (!isFavorite && like) {
      return like.indexOf(id) !== -1 ? 'fas' : 'far';
    }

    return 'far';
  };

  return (
    <>
      {userControlData(isFull).map((data) => {
        const {name, type, mr} = data;

        return <span key={name} className={name}>
        <i id={type}
           className={`${getIconType(type)} fa-${name} fa-2x ${mr}`}
           onClick={onIcon}>
        </i>
      </span>;
      })}
    </>
  );
}
