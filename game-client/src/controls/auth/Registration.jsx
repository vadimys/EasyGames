import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import auth from "../../redux/actions/AuthActions";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import ServiceAlert from "../common/SeviceAlert";

export default function Register({ show, onHide }) {
  const empty = { email: "", username: "", password: "" };
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { registering, registered } = useSelector(state => state.registration);
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState(empty);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser(user => ({ ...user, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (user.email && user.username && user.password) {
      dispatch(auth.onRegister({
        username: user.username,
        email: user.email,
        password: user.password
      }));
    }
  };
  const onShowPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    registered && show && onHide();
  }, [onHide, registered, show]);

  return (
    <Modal show={show} size="sm" aria-labelledby="contained-modal-title-vcenter" centered onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="h2 text-info">
          Registration
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i className="fas fa-envelope" />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="email" name="email" onChange={handleChange}
                         placeholder="Enter email" autoFocus
                         className={"form-control" + (submitted && !user.email ? " is-invalid" : "")} />
            {submitted && !user.email &&
            <FormControl.Feedback type="invalid">Email is required</FormControl.Feedback>
            }
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i className="fas fa-user" />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="text" name="username" onChange={handleChange}
                         placeholder="Username"
                         className={"form-control" + (submitted && !user.username ? " is-invalid" : "")} />
            {submitted && !user.username &&
            <FormControl.Feedback type="invalid">Username is required</FormControl.Feedback>
            }
          </InputGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i className="fas fa-key" />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type={showPassword ? "text" : "password"} name="password"
                         onChange={handleChange}
                         placeholder="Password"
                         className={"form-control" + (submitted && !user.password ? " is-invalid" : "")} />
            <InputGroup.Append>
              <InputGroup.Text>
                <i className={showPassword ? "fas fa-eye" : "fas fa-eye-slash"} onClick={onShowPassword} />
              </InputGroup.Text>
            </InputGroup.Append>
            {submitted && !user.password &&
            <FormControl.Feedback type="invalid">Password is required</FormControl.Feedback>
            }
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" className="mr-2">
            {registering && <span className="spinner-border spinner-border-sm mr-1"> </span>}
            Register
          </Button>
          <Button variant="secondary" onClick={onHide}>Cancel</Button>
        </Modal.Footer>
      </Form>
      <ServiceAlert />
    </Modal>
  );
}
