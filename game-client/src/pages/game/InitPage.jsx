import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import gameData from "../../helpers/GameData";
import { useDispatch, useSelector } from "react-redux";
import gameActions from "../../redux/actions/GameActions";
import { useHistory } from "react-router-dom";

export default function InitPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useState(props.show);
  const [firstStep, setFirstStep] = useState(false);
  const [dimension, setDimension] = useState(0);
  const { user } = useSelector(state => state.login);
  const { starting, started } = useSelector(state => state.game);
  const data = gameData.getData(props.id);
  const onChange = (event) => {
    const { id, value, checked } = event.currentTarget;

    if (id === 'first-step' && firstStep !== checked) {
      setFirstStep(checked);
    }

    if (id === 'select-dimension' && dimension !== value) {
      setDimension(value);
    }
  };
  const onHide = () => {
    setShow(false);
    props.onHide();
    !started && dispatch(gameActions.startGameCanceled());
  };
  const onStart = () => {
    dispatch(gameActions.startGame({
      id: props.id,
      firstStep,
      dimension
    }));
  };

  useEffect(() => {
    if (started) {
      onHide();
      history.push('/game');
    }
  }, [started]);

  return (
    <Modal show={show} size="sm" backdrop="static" centered onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="h2 text-info">Game init</Modal.Title>
      </Modal.Header>
      <Modal.Body><Col>
        {data.selectStep &&
        <Form.Check type="switch" id="first-step" disabled={starting}
                    label='Do you want to play first?' checked={firstStep} onChange={onChange} />}
        {data.dimension && data.dimension.length > 1 &&
        <Form.Row className="mt-4">
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
    </Modal>
  );
}
