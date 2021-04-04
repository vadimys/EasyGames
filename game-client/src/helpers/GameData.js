import { useSelector } from 'react-redux';

function getName(id) {
  let name = '';
  const { list } = useSelector(state => state.games);

  list.forEach(data => {
    if (data.id === id) {
      name = data.name;
    }
  });

  return name;
}

function getMainInfo(id) {
  let info = null;
  const { list } = useSelector(state => state.games);

  list.forEach(data => {
    if (data.id === id) {
      info = data.info;
    }
  });

  return info;
}

function isAvailable(id) {
  let isAvailable = false;
  const { list } = useSelector(state => state.games);

  list.forEach(data => {
    if (data.id === id) {
      isAvailable = data.isAvailable;
    }
  });

  return isAvailable;
}

export default {
  getName,
  isAvailable,
  getMainInfo
}
