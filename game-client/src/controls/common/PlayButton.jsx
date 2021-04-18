import { Button } from "react-bootstrap";
import React, { useState } from "react";
import InitPage from "../game/InitPage";
import getGameData from "../../helpers/getGameData";

export function PlayButton({ id }) {
  const [showInit, setShowInit] = useState(false);
  const isAvailable = getGameData({ id, type: "isAvailable" });

  return (
    <>
      <Button variant="info" className="mr-3" disabled={!isAvailable} onClick={() => setShowInit(true)}>
        <i className="fas fa-gamepad mr-2"> </i>Play</Button>
      {showInit && <InitPage show id={id} onHide={() => setShowInit(false)} />}
    </>
  );
}
