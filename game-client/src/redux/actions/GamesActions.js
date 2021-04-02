import types from '../constants';
import alert from './AlertActions';
import { get, post } from '../../service/HttpRequests';

const getAll = (id) => {
  function request() {
    return { type: types.GET_ALL_GAMES_REQUEST };
  }

  function success(games) {
    return { type: types.GET_ALL_GAMES_SUCCESS, games };
  }

  function failure(error) {
    return { type: types.GET_ALL_GAMES_FAILURE, error };
  }

  return dispatch => {
    dispatch(request([]));

    get('/games', id)
      .then(res => {
        let games = [];

        if (res.data && res.data.games) {
          games = res.data.games;

          if (res.data.favorite) {
            games.forEach((data) => {
              data.isFavorite = res.data.favorite.indexOf(data.id) !== -1;
            });
          }

          if (res.data.like) {
            games.forEach((data) => {
              data.isLike = res.data.like.indexOf(data.id) !== -1;
            });
          }
        }

        dispatch(success(games));
      })
      .catch(err => {
        dispatch(failure(err.toString()));
        dispatch(alert.error(err.toString()));
      });
  };
};

const updateGameType = (data) => {
  return dispatch => {
    const userId = localStorage.getItem('easy-games-user-id');


    post(`/update/${data.type}`, {
      userId,
      value: data.value,
      gameId: data.id,
      type: data.type
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.toString());
      });
    dispatch({ type: types.UPDATE_GAME_TYPE, data });
  };
};

export default {
  getAll,
  updateGameType
};
