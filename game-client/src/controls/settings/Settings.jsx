import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Form, Modal } from "react-bootstrap";

export default function Settings(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(props.show);
  const { user } = useSelector(state => state.login);
  const onChange = (event) => {
    const { id, value, checked } = event.currentTarget;

    if (id === 'first-step') {
      dispatch()
    }
  };
  const onHide = () => {
    setShow(false);
    props.onHide();
  };

  return (
    <Modal show={show} size="sm" backdrop="static" centered onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="h2 text-info">General settings</Modal.Title>
      </Modal.Header>
      <Modal.Body><Col>
        <Form.Check type="switch" id="first-step"
                    label='Do you want to play first?' checked={user.firstStep} onChange={onChange} />
      </Col></Modal.Body>
    </Modal>
  );
}
