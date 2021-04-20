import types from "../constants";

const initialState = {
  initializing: false,
  canceled: false,
  starting: false,
  started: false,
  dimension: null,
  id: null,
  sessionId: null,
  actionStarted: false,
  actionFinished: false,
  restarting: false,
  restarted: false
};

export function game(state = initialState, action) {
  switch (action.type) {
    case types.INIT_GAME:
      return {
        ...initialState,
        initializing: true,
      };
    case types.RESTART_GAME_REQUEST:
      return {
        ...state,
        restarting: true,
        restarted: false
      };
    case types.START_GAME_REQUEST:
      return {
        ...state,
        initializing: false,
        starting: true,
        started: false
      };
    case types.RESTART_GAME_SUCCESS:
      return {
        ...state,
        restarting: false,
        restarted: true,
        sessionId: action.data.sessionId
      };
    case types.GET_GAME_BY_USER_ID_SUCCESS:
    case types.START_GAME_SUCCESS:
      return !state.canceled ? {
          ...state,
          canceled: false,
          starting: false,
          started: true,
          dimension: action.data.dimension,
          id: action.data.id,
          sessionId: action.data.sessionId
        } :
        { ...initialState };
    case types.START_GAME_ERROR:
      return { ...initialState };
    case types.START_GAME_CANCELED:
      return {
        ...state,
        canceled: true
      };
    case types.SAVE_GAME_SUCCESS:
      return !state.restarted ? { ...initialState } : {...state};
    case types.FINISH_GAME_SUCCESS:
      return { ...initialState };
    case types.FINISH_GAME_ERROR:
      return { ...state };

    case types.GAME_ACTION_RESPONSE:
      return {
        ...state,
        actionStarted: false,
        actionFinished: true
      };
    case types.GAME_ACTION_REQUEST:
      return {
        ...state,
        actionStarted: true
      };
    case types.GAME_ACTION_ERROR:
      return {
        ...state
      };

    default:
      return state;
  }
}
