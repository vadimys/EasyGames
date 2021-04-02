import React from 'react';
import types from '../redux/constants';
import gamesActions from '../redux/actions/GamesActions';
import { useDispatch, useSelector } from 'react-redux';

export function GameControls({ id }) {
  const dispatch = useDispatch();
  const { favorites } = useSelector(state => state.allGames);
  const onIcon = (event) => {
    dispatch(gamesActions.updateGameType({
      id,
      value: event.currentTarget.id === types.FAVORITE
        ? favorites ? favorites.indexOf(id) === -1 : true
        : favorites ? favorites.indexOf(id) === -1 : true,
      type: event.currentTarget.id
    }));
  };

  const getIconType = (isFavorite = true) => {
    if (isFavorite && favorites) {
      return favorites.indexOf(id) !== -1 ? 'fas' : 'far';
    }

    return 'far';
  };

  return (
    <>
      <span className='bookmark'>
        <i id={types.FAVORITE}
           className={`${getIconType()} fa-bookmark fa-2x mr-5`}
           onClick={onIcon}>
        </i>
      </span>
      <span className='thumbs-up'>
        <i id={types.LIKE}
           className={`${getIconType(false)} fa-thumbs-up fa-2x mr-2`}
           onClick={onIcon}>
        </i>
      </span>
    </>
  );
}
