import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import InitPage from "../game/InitPage";
import getGameData from "../../helpers/getGameData";
import { useDispatch, useSelector } from "react-redux";
import gameActions from "../../redux/actions/GameActions";

export function PlayButton({ id }) {
  const dispatch = useDispatch();
  // const { initializing } = useSelector(state => state.game);
  const [init, setInit] = useState(false);
  const isAvailable = getGameData({ id, type: "isAvailable" });
  const onPlay = () => {
    dispatch(gameActions.initGame());
    setInit(true)
  };

  /*useEffect(() => {
    initializing && setInit(true);
  }, []);*/

  return (
    <>
      <Button variant="info" className="mr-3" disabled={!isAvailable} onClick={onPlay}>
        <i className="fas fa-gamepad mr-2"> </i>Play</Button>
      {init && <InitPage id={id} onInit={() => setInit(false)} />}
    </>
  );
}
