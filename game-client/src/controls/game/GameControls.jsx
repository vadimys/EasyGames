import { Button, Nav, Navbar } from "react-bootstrap";
import React, { useCallback } from "react";
import { UserControls } from "../games/UserControls";
import { useHistory } from "react-router-dom";
import gameActions from "../../redux/actions/GameActions";
import { useDispatch, useSelector } from "react-redux";

export default function GameControls({ id }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector(state => state.login);
  const { sessionId, restarting } = useSelector(state => state.game);
  const onRestart = useCallback(() => {
    dispatch(gameActions.restartGame({ sessionId }));
  }, [dispatch, sessionId]);
  const onGiveUp = () => {
    history.push("/games");
  };

  return (
    <Navbar>
      <Nav className="mr-auto">
        {user && <Button variant="outline-info" className="mr-3" onClick={onRestart} disabled={restarting}>
          <i className="fas fa-reply mr-2"> </i>Restart</Button>}
        <Button variant="outline-dark" onClick={onGiveUp} disabled={restarting}>
          <i className="fas fa-handshake mr-2"> </i>Give up</Button>
      </Nav>
      <UserControls id={id} userControls="like" />
    </Navbar>
  );
}
