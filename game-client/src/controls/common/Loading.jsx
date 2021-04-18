import React from "react";
import { Spinner } from "react-bootstrap";

export function Loading() {
  return (
    <div className="play-area-container">
      <Spinner size='xl' animation="border" role="status" variant="info">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}
