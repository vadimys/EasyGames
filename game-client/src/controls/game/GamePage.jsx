import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import gameActions from "../../redux/actions/GameActions";
import PlayArea from "../game/PlayArea";
import Waiting from "../common/Waiting";

export default function Game() {
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.games);

  useEffect(() => {
    list.length === 0 && dispatch(gameActions.getGames());
  }, [dispatch, list.length]);

  return (
    <>
      {list && list.length > 0 ?
        <Card className="text-center" border="success">
          <PlayArea />
        </Card> : <Waiting />}
    </>
  );
}
