import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import gameActions from "../../redux/actions/GameActions";
import { Spinner } from "react-bootstrap";
import { GameItem } from "./GameItem";
import { useHistory } from "react-router-dom";
import alertActions from "../../redux/actions/AlertActions";

export function GameList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showAlert, setShowAlert] = useState(false);
  const { alert } = useSelector(state => state);
  const { isGot, list } = useSelector(state => state.games);

  useEffect(() => {
    dispatch(gameActions.getGames());
  }, []);

  useEffect(() => {
    if (alert.message) {
      const timer = setTimeout(() => {
        setShowAlert(false);
        dispatch(alertActions.clear());
        history.push("/");
      }, 2000);

      setShowAlert(true);

      return () => clearTimeout(timer);
    }
  }, [alert.message]);

  return (
    <>
      {isGot
        ? list
          .sort((x, y) => (x.isAvailable === y.isAvailable) ? 0 : x.isAvailable ? -1 : 1)
          .map(data => <GameItem key={data.id} id={data.id} />)
        : showAlert
          ? <div className={`alert ${alert.type}`}>
            {alert.message}
          </div>
          : <div className="play-area-container">
            <Spinner animation="border" role="status" variant="info">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>}
    </>
  );
}
