import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import gameActions from "../../redux/actions/GameActions";
import { GameItem } from "./GameItem";
import Waiting from "../common/Waiting";

export default function GameList() {
  const dispatch = useDispatch();
  const { isGotGames, list } = useSelector(state => state.games);

  useEffect(() => {
    !isGotGames && dispatch(gameActions.getGames());
  }, [dispatch, isGotGames]);

  return (
    <>
      {isGotGames
        ? list
          .sort((x, y) => (x.isAvailable === y.isAvailable) ? 0 : x.isAvailable ? -1 : 1)
          .map(data => <GameItem key={data.id} id={data.id} />)
        : <Waiting />}
    </>
  );
}
