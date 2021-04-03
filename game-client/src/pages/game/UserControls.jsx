import React from 'react';
import types from '../../redux/constants';
import gamesActions from '../../redux/actions/GamesActions';
import { useDispatch, useSelector } from 'react-redux';

export function UserControls({ id }) {
  const dispatch = useDispatch();
  const { favorite, like } = useSelector(state => state.allGames);
  const onIcon = (event) => {
    dispatch(gamesActions.updateGameType({
      id,
      value: event.currentTarget.classList[0] !== 'fas',
      type: event.currentTarget.id
    }));
  };

  const getIconType = (isFavorite = true) => {
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
