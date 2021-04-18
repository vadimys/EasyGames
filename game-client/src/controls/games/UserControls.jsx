import React from "react";
import gameActions from "../../redux/actions/GameActions";
import { useDispatch, useSelector } from "react-redux";
import userControlData from "../../helpers/UserControlData";
import types from "../../redux/constants";

export function UserControls({ id, isFull }) {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.login);
  const { favorite, like } = useSelector(state => state.games);
  const onIcon = (event) => {
    dispatch(gameActions.updateGameProp({
      id,
      value: event.currentTarget.classList[0] !== "fas",
      type: event.currentTarget.id,
      userId: user.id
    }));
  };
  const getIconType = (controlId) => {
    const isFavorite = controlId === types.FAVORITE;

    return isFavorite && favorite
      ? favorite.indexOf(id) !== -1
        ? "fas"
        : "far"
      : (!isFavorite && like)
        ? like.indexOf(id) !== -1
          ? "fas"
          : "far"
        : "far";
  };

  return (
    <>
      {userControlData(isFull).map((data) => {
        const { name, type, mr } = data;

        return <span key={name} className={name}>
        <i id={type}
           className={`${getIconType(type)} fa-${name} fa-2x ${mr}`}
           onClick={onIcon}>
        </i>
      </span>;
      })}
    </>
  );
}
