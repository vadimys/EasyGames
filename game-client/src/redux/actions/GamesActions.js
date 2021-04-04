import types from '../constants';
import alert from './AlertActions';
import { get, post } from '../../service/HttpRequests';

const getAll = (id) => {
  function request(games) {
    return { type: types.GET_ALL_GAMES_REQUEST, games };
  }

  function success(data) {
    return { type: types.GET_ALL_GAMES_SUCCESS, data };
  }

  function failure(error) {
    return { type: types.GET_ALL_GAMES_FAILURE, error };
  }

  return dispatch => {
    dispatch(request([])); // TODO: init this

    get('/games', id)
      .then(res => {
        const { games, favorite, like } = res.data;

        dispatch(success({ list: games, favorite, like }));
      })
      .catch(err => {
        dispatch(failure(err.toString()));
        dispatch(alert.error(err.toString()));
      });
  };
};

const updateGameType = (data) => {
  function success(data) {
    return { type: types.UPDATE_GAME_TYPE, data };
  }

  function failure() {
    return { type: types.UPDATE_GAME_TYPE_FAILURE };
  }

  return dispatch => {
    const { value, id, type } = data;
    const userId = localStorage.getItem('easy-games-user-id');

    post(`/update/${data.type}`, { userId, value, type, gameId: id })
      .then(res => dispatch(success({ type, data: res.data })))
      .catch(_ => dispatch(failure()));
  };
};

export default {
  getAll,
  updateGameType
};
