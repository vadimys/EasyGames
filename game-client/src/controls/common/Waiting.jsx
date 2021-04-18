import React from "react";
import { useSelector } from "react-redux";
import { Loading } from "./Loading";
import ServiceAlert from "../common/SeviceAlert";

export default function Waiting() {
  const { alert } = useSelector(state => state);

  return (
    <>
      {alert.message ? <ServiceAlert /> : <Loading />}
    </>
  );
}
