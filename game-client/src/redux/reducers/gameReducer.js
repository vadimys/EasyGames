import types from "../constants";

const initialState = {
  canceled: false,
  starting: false,
  started: false,
  dimension: null,
  id: null,
  sessionId: null,
  actionStarted: false,
  actionFinished: false
};

export function game(state = initialState, action) {
  switch (action.type) {
    case types.START_GAME_REQUEST:
      return {
        ...state,
        starting: true
      };
    case types.START_GAME_SUCCESS:
      const { dimension, id, sessionId } = action.data;

      return !state.canceled ? {
          ...state,
          canceled: false,
          starting: false,
          started: true,
          dimension,
          id,
          sessionId
        } :
        { ...initialState };
    case types.START_GAME_ERROR:
      return { ...initialState };
    case types.START_GAME_CANCELED:
      return {
        ...state,
        canceled: true
      };
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
