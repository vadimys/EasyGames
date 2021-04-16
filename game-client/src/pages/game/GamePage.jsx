import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import gameData from "../../helpers/GameData";
import { useDispatch, useSelector } from "react-redux";
import gameActions from "../../redux/actions/GameActions";
import PlayArea from "../game/PlayArea";

export function GamePage() {
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.games);
  const { id } = useSelector(state => state.game);

  useEffect(() => {
    list.length === 0 && dispatch(gameActions.getGames());
  }, []);

  return (
      <Card className="text-center" border="success">
        {id && <Card.Header as={"h3"}>{gameData.getName(id)}</Card.Header>}
        <Card.Body className="play-area-container"><PlayArea /></Card.Body>
        {/*<Card.Footer><GameControls id={id} /></Card.Footer>*/}
      </Card>
  )
}
