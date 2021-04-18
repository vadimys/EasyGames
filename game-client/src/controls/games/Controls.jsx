import { Nav, Navbar } from "react-bootstrap";
import React from "react";
import { UserControls } from "./UserControls";
import { useSelector } from "react-redux";
import getGameData from "../../helpers/getGameData";
import { PlayButton } from "../common/PlayButton";

export default function Controls({ id }) {
  const { isLoggedIn } = useSelector(state => state.login);
  const isAvailable = getGameData({ id, type: "isAvailable" });

  return (
    <Navbar>
      <Nav className="mr-auto">
        <PlayButton id={id} />
      </Nav>
      {isLoggedIn && isAvailable && <UserControls id={id} isFull />}
    </Navbar>
  );
}
