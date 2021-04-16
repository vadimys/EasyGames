import { useSelector } from 'react-redux';

function getData(id) {
  let data = null;
  const { list } = useSelector(state => state.games);

  list.forEach(item => {
    if (item.id === Number(id) && item.data) {
      data = item.data;
    }
  });

  return data;
}

function getType(id) {
  let type = -1;
  const { list } = useSelector(state => state.games);

  list.forEach(item => {
    if (item.id === Number(id)) {
      type = item.type;
    }
  });

  return type;
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
  getData,
  getType
};
