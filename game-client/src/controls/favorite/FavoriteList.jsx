import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
import { Favorite } from "./Favorite";
import gameActions from "../../redux/actions/GameActions";
import Waiting from "../common/Waiting";

export default function FavoriteList() {
  const dispatch = useDispatch();
  const { list, favorite, isGotGameProps } = useSelector(state => state.games);

  useEffect(() => {
    list.length === 0 && dispatch(gameActions.getGames());
  }, [dispatch, list.length]);

  return (
    <>
      {isGotGameProps
        ? favorite.length > 0 ? favorite.map((id) => <Favorite key={id} id={id} />)
          : <Alert variant="light" className="text-center">
            Still no favorite games! You can add them by pressing
            <i className={`far fa-bookmark ml-2 mr-2`} />
            in the games section!
          </Alert> : <Waiting />
      }
    </>
  );
}
