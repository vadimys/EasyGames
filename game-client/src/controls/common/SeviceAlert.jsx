import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import alertActions from "../../redux/actions/AlertActions";

export default function ServiceAlert() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { alert } = useSelector(state => state);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(alertActions.clear());
      history.push("/");
    }, 2000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      {alert.message ? <div className={`alert ${alert.type}`}>{alert.message}</div> : null}
    </>
  );
}
