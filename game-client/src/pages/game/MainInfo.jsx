import React from 'react';
import { Card } from 'react-bootstrap';
import parser from 'react-html-parser';

export function MainInfo({ data }) {
  return (
    <>
      {/*{data.players && <><Card.Title>{data.players.amount}</Card.Title>
        {data.players.text && <Card.Text>{data.players.text}</Card.Text>}</>}
      {data.description && <><Card.Title>Description</Card.Title>
        <Card.Text>{parser(data.description)}</Card.Text></>}
      {data.history && <><Card.Title>History</Card.Title>
        <Card.Text>{parser(data.history)}</Card.Text></>}*/}
    </>
  );
}
