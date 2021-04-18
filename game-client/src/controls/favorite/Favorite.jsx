import { Button, Card, Modal, Nav, Navbar } from "react-bootstrap";
import getGameData from "../../helpers/getGameData";
import React, { useState } from "react";
import { UserControls } from "../games/UserControls";
import MainInfo from "../games/MainInfo";
import { PlayButton } from "../common/PlayButton";

export function Favorite({ id }) {
  const [showInfo, setShowInfo] = useState(false);
  const { isAvailable, name } = getGameData({ id, type: ["isAvailable", "name"] });

  return (
    <>{isAvailable ?
      <Card className="mb-3" border="success">
        <Navbar>
          <Nav className="mr-auto"><h3>{name}</h3></Nav>
          <PlayButton id={id} />
          <Button variant="info" className="mr-3" onClick={() => setShowInfo(true)}>
            <i className="fas fa-info mr-2"> </i>Info
          </Button>
          <UserControls id={id} isFull={false} />
          <Modal size="xl" show={showInfo} onHide={() => setShowInfo(false)}
                 aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter" className="h2 text-info">{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body><MainInfo id={id} /></Modal.Body>
          </Modal>
        </Navbar>
      </Card> : null}
    </>
  );
}
