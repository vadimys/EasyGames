import React from 'react';
import { Card } from 'react-bootstrap';
import parser from 'react-html-parser';
import gameData from '../../helpers/GameData';

export default function MainInfo({ id }) {
  const info = gameData.getMainInfo(id);

  return (
    <>
      {info.general && <Card.Title className='text-center'>{info.general}</Card.Title>}
      {info.description && <><Card.Title>Description</Card.Title>
        <Card.Text>{parser(info.description)}</Card.Text></>}
      {info.history && <><Card.Title>History</Card.Title>
        <Card.Text>{parser(info.history)}</Card.Text></>}
    </>
  );
}
