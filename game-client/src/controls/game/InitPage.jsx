import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import getGameData from "../../helpers/getGameData";
import { useDispatch, useSelector } from "react-redux";
import gameActions from "../../redux/actions/GameActions";
import { useHistory } from "react-router-dom";

export default function InitPage({ id, onInit }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [dimension, setDimension] = useState(0);
  const { user } = useSelector(state => state.login);
  const { starting, started } = useSelector(state => state.game);
  const data = getGameData({ id, type: "data" });
  const onChange = (event) => {
    const { id, value } = event.currentTarget;

    if (id === "select-dimension" && dimension !== value) {
      setDimension(value);
    }
  };
  const hasParams = useCallback(() => data.dimension && data.dimension.length > 1, [data.dimension]);
  const onStart = useCallback(() => {
    dispatch(gameActions.startGame({ id, userId: user && user.id, dimension }))
  }, [dimension, dispatch, id, user]);

  useEffect(() => {
    !hasParams() && !started && onStart();
    started && history.push("/game");
  }, [hasParams, history, onStart, started]);

  return (<>
      {hasParams() && <Modal show size="sm" backdrop="static" centered onHide={onInit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="h2 text-info">Game init</Modal.Title>
        </Modal.Header>
        <Modal.Body><Col>
          {data.dimension && data.dimension.length > 1 &&
          <Form.Row>
            <Form.Label>Select size of the grid:</Form.Label>
            <Form.Control as="select" id="select-dimension" custom
                          onChange={onChange} disabled={starting}>
              {data.dimension.map((item, index) => (
                <option key={index} value={index}>{`${item.width} x ${item.height}`}</option>
              ))}
            </Form.Control>
          </Form.Row>}
        </Col></Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={onStart}>
            {starting && <span className="spinner-border spinner-border-sm mr-1" />}
            <i className="fas fa-dice-six mr-2"> </i>Start
          </Button>
        </Modal.Footer>
      </Modal>}
    </>
  );
}
