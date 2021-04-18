import { Badge, Card } from "react-bootstrap";
import React from "react";
import getGameData from "../../helpers/getGameData";
import { useSelector } from "react-redux";

export function Badges({ id }) {
  const { list } = useSelector(state => state.games);
  const { isAvailable, isExclusive } = getGameData({
    id, list, type: [
      "isAvailable",
      "isExclusive"
    ]
  });

  return (
    <Card.Subtitle className="text-right">
      {isExclusive && <Badge pill variant="success">Exclusive</Badge>}
      {!isAvailable && <Badge pill variant="danger">Coming soon</Badge>}
    </Card.Subtitle>
  );
}
