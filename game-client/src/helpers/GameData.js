import { useSelector } from 'react-redux';

function getDimensions(id) {
  let dimensions = [{
    width: 3,
    height: 3
  }];
  const { list } = useSelector(state => state.games);

  list.forEach(data => {
    if (data.id === Number(id)) {
      dimensions = data.dimensions;
    }
  });

  return dimensions;
}

function getName(id) {
  let name = '';
  const { list } = useSelector(state => state.games);

  list.forEach(data => {
    if (data.id === Number(id)) {
      name = data.name;
    }
  });

  return name;
}

function getMainInfo(id) {
  let info = null;
  const { list } = useSelector(state => state.games);

  list.forEach(data => {
    if (data.id === Number(id)) {
      info = data.info;
    }
  });

  return info;
}

function isAvailable(id) {
  let isAvailable = false;
  const { list } = useSelector(state => state.games);

  list.forEach(data => {
    if (data.id === Number(id)) {
      isAvailable = data.isAvailable;
    }
  });

  return isAvailable;
}

function isExclusive(id) {
  let isExclusive = false;
  const { list } = useSelector(state => state.games);

  list.forEach(data => {
    if (data.id === Number(id)) {
      isExclusive = data.isExclusive;
    }
  });

  return isExclusive;
}

export default {
  getName,
  isAvailable,
  isExclusive,
  getMainInfo,
  getDimensions
};
