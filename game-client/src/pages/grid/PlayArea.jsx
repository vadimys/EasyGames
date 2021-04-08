import React from 'react';

export default function PlayArea({ size, border }) {
  const handleClick = (i) => {
  };
  const setNoBorder = (sides) => {
    if(!border) {
      return sides.map(side => `no-border-${side}`).join(' ');
    }

    return '';
  }
  const items = () => {
    let tb, lr;
    let index = 0;
    const data = [];

    for (let i = 0; i < size.height; i++) {
      tb = (i === 0) ? 'top' : i === (size.height - 1) ? 'bottom' : '';

      for (let j = 0; j < size.width; j++) {
        lr = (j === 0) ? 'left' : j === (size.width - 1) ? 'right' : '';
        index = i + j;

        data.push({
          id: `block_${index}`,
          className: `block ${setNoBorder([tb, lr])}`,
          onClick: handleClick(index)
        });
      }
    }

    return data;
  };

  return (
    <div className={`play-area-${size.width}`}>{items().map((data, index) =>
      <div key={index} id={data.id} className={data.className} onClick={data.onClick} />
    )}</div>
  );
}
