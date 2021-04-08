import React from 'react';
import PlayArea from '../grid/PlayArea';
import gameData from '../../helpers/GameData';

export function NewGame({ id }) {
  const dimensions = gameData.getDimensions(id);

  return (
    <div className='play-area-container'>
      <PlayArea size={dimensions[0]} border={dimensions.length > 1} />
    </div>
  );
}
