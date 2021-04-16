import { Button, Nav, Navbar } from "react-bootstrap";
import React, { useState } from "react";
import { UserControls } from "./UserControls";
import { useSelector } from "react-redux";
import gameInfo from "../../helpers/GameData";
import InitPage from "../game/InitPage";

export default function Controls({ id }) {
  const [showInit, setShowInit] = useState(false);
  const { isLoggedIn } = useSelector(state => state.login);
  const isAvailable = gameInfo.isAvailable(id);

  return (
    <Navbar>
      <Nav className="mr-auto">
        <Button variant="info" disabled={!isAvailable} onClick={() => setShowInit(true)}>
          <i className="fas fa-gamepad mr-2"> </i>Play</Button>
      </Nav>
      {isLoggedIn && isAvailable && <UserControls id={id} isFull />}
      {showInit && <InitPage show id={id} onHide={() => setShowInit(false)} />}
    </Navbar>
  );
}
