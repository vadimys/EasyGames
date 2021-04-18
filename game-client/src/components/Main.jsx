import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import alertActions from "./../redux/actions/AlertActions";
import { Route, Switch, useHistory } from "react-router-dom";
import GameRoute from "./routes/GameRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "../controls/Home";
import History from "../controls/History";
import GameList from "../controls/games/GameList";
import Game from "../controls/game/GamePage";
import FavoriteList from "../controls/favorite/FavoriteList";
import Settings from "../controls/settings/Settings";

export default function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => history.listen((data) => {
    dispatch(alertActions.clear());
  }));

  return (
    <div className="easy-game-main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/history" component={History} />
        <Route path="/games" component={GameList} />
        <GameRoute path="/game" component={Game} />
        <PrivateRoute path="/favorites" component={FavoriteList} />
        <PrivateRoute path="/settings" component={Settings} />
      </Switch>
    </div>
  );
}
