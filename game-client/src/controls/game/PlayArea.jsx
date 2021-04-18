import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import gameActions from "../../redux/actions/GameActions";
import { usePreventLeave } from "../../helpers/usePreventLeave";
import Waiting from "../common/Waiting";
import { Card } from "react-bootstrap";
import getGameData from "../../helpers/getGameData";

export default function PlayArea() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.login);
  const { id, dimension, sessionId, started } = useSelector(state => state.game);
  const setNoBorder = (sides) => {
    if (dimension.width === 3 && dimension.height === 3) { // TODO: make more specific
      return sides.map(side => `no-border-${side}`).join(" ");
    }

    return "";
  };
  const gameName = getGameData({ id, type: "name" });
  const items = () => {
    if (dimension) {
      let tb, lr, index = 0;
      const data = [];

      for (let i = 0; i < dimension.height; i++) {
        tb = (i === 0) ? "top" : i === (dimension.height - 1) ? "bottom" : "";
        for (let j = 0; j < dimension.width; j++) {
          lr = (j === 0) ? "left" : j === (dimension.width - 1) ? "right" : "";
          index = i.toString() + j.toString();

          data.push({
            id: `block_${index}`,
            className: `block ${setNoBorder([tb, lr])}`,
            onClick: handleClick.bind(this, index)
          });
        }
      }

      return data;
    }
  };
  const onFinishGame = () => dispatch(gameActions.finishGame(sessionId));
  const handleClick = (index) => {
    dispatch(gameActions.onGameAction({
      sessionId,
      gridIndex: index
    }));
  };

  useEffect(() => {
    !started && dispatch(gameActions.getGamesByUserId({
      userId: user && user.id
    }));
    // enablePrevent();
    return () => {
      // disablePrevent();
      onFinishGame();
    };
  });

  return (
    <> {started ? <>
      <Card.Header as={"h3"}>{gameName}</Card.Header>
      <Card.Body className="play-area-container">
        <div className={`play-area-${dimension.width}`}>
          {items().map((data, index) =>
            <div key={index} id={data.id} className={data.className} onClick={data.onClick} />)}
        </div>
      </Card.Body>
      {/*<Card.Footer><GameControls id={id} /></Card.Footer>*/}
    </> : <Waiting />}
    </>
  );
}
