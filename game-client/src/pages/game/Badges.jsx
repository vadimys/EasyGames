import { Badge, Card } from 'react-bootstrap';
import React from 'react';
import data from '../../helpers/GameData';

export function Badges({ id }) {
  return (
    <Card.Subtitle className='text-right'>
      {!data.isAvailable(id) && <Badge pill variant='danger'>Coming soon</Badge>}
    </Card.Subtitle>
  );
}
