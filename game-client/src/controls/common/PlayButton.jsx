import { Button } from "react-bootstrap";
import React, { useState } from "react";
import InitPage from "../game/InitPage";
import getGameData from "../../helpers/getGameData";

export function PlayButton({ id }) {
  const [init, setInit] = useState(false);
  const isAvailable = getGameData({ id, type: "isAvailable" });

  return (
    <>
      <Button variant="info" className="mr-3" disabled={!isAvailable} onClick={() => setInit(true)}>
        <i className="fas fa-gamepad mr-2"> </i>Play</Button>
      {init && <InitPage id={id} onInit={() => setInit(false)} />}
    </>
  );
}
