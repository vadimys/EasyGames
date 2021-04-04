import { Card } from 'react-bootstrap';
import React from 'react';
import { Badges } from './Badges';
import gameData from '../../helpers/GameData';
import Controls from './Controls';
import MainInfo from './MainInfo';

export function Game({ id }) {
  return (
    <Card className='mb-3' border='info'>
      <Card.Header as={'h3'} className='text-center'><Badges id={id} />{gameData.getName(id)}</Card.Header>
      <Card.Body><MainInfo id={id} /></Card.Body>
      <Card.Footer><Controls id={id} /></Card.Footer>
    </Card>
  );
}
