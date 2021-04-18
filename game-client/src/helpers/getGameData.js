import { useSelector } from "react-redux";

function GetGameData(props) {
  let data = null;
  const { id, type } = props;
  const { list } = useSelector(state => state.games);
  const check = (game, prop = type) => game.id === Number(id) && game[prop];

  list.forEach(game => {
    if (Array.isArray(type)) {
      if (!data) data = {};

      type.forEach(value => {
        if (check(game, value)) {
          data[value] = game[value];
        }
      });
    } else if (check(game)) {
      data = game[type];
    }
  });

  return data;
}

export default GetGameData;
