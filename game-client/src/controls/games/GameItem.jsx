import { Card } from "react-bootstrap";
import React from "react";
import { Badges } from "./Badges";
import getGameData from "../../helpers/getGameData";
import Controls from "./Controls";
import MainInfo from "./MainInfo";
import { useSelector } from "react-redux";

export function GameItem({ id }) {
  const { list } = useSelector(state => state.games);
  const name = getGameData({ id, list, type: "name" });

  return (
    <Card className="mb-3" border="info">
      <Card.Header as={"h3"} className="text-center"><Badges id={id} />{name}</Card.Header>
      <Card.Body><MainInfo id={id} /></Card.Body>
      <Card.Footer><Controls id={id} /></Card.Footer>
    </Card>
  );
}
