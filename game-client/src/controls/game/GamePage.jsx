import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import gameActions from "../../redux/actions/GameActions";
import PlayArea from "../game/PlayArea";
import Waiting from "../common/Waiting";

export default function Game() {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector(state => state.login);
  const { list } = useSelector(state => state.games);
  const { sessionId } = useSelector(state => state.game);

  useEffect(() => {
    list.length === 0 && dispatch(gameActions.getGames());
    return () => {
      user
        ? dispatch(gameActions.saveGame(sessionId))
        : dispatch(gameActions.finishGame(sessionId))
    }
  }, [dispatch, list.length, sessionId, user, isLoggedIn]);

  return (
    <>
      {list && list.length > 0 ?
        <Card className="text-center" border="success">
          <PlayArea />
        </Card> : <Waiting />}
    </>
  );
}
