import { Button, Card, Modal, Nav, Navbar } from "react-bootstrap";
import gameData from "../../helpers/GameData";
import React, { useState } from "react";
import { UserControls } from "../games/UserControls";
import MainInfo from "../games/MainInfo";
import InitPage from "../game/InitPage";

export function Favorite({ id }) {
  const [showInit, setShowInit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const isAvailable = gameData.isAvailable(id);

  return (
    <>{isAvailable ?
      <Card className="mb-3" border="success">
        <Navbar>
          <Nav className="mr-auto">
            <h3>{gameData.getName(id)}</h3>
          </Nav>
          <Button variant="info" className="mr-3"disabled={!isAvailable} onClick={() => setShowInit(true)}>
            <i className="fas fa-gamepad mr-2"> </i>Play</Button>
          <Button variant="info" className="mr-3" onClick={() => setShowInfo(true)}>
            <i className="fas fa-info mr-2"> </i>Info
          </Button>
          <UserControls id={id} isFull={false} />
          <Modal size="xl" show={showInfo} onHide={() => setShowInfo(false)}
                 aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter" className="h2 text-info">
                {gameData.getName(id)}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body><MainInfo id={id} /></Modal.Body>
          </Modal>
          {showInit && <InitPage show id={id} onHide={() => setShowInit(false)} />}
        </Navbar>
      </Card> : null}
    </>
  );
}
