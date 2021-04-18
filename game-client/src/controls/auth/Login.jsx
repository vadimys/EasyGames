import React, { useEffect, useState } from "react";
import auth from "../../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import ServiceAlert from "../common/SeviceAlert";

export default function Login({ show, onHide }) {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const { username, password } = inputs;
  const { loggingIn, isLoggedIn } = useSelector(state => state.login);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      dispatch(auth.onLogin({ username, password }));
    }
  };
  const onShowPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    isLoggedIn && show && onHide();
  }, [isLoggedIn, onHide, show]);

  return (
    <Modal show={show} size="sm" aria-labelledby="contained-modal-title-vcenter" centered onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="h2 text-info">
          Login
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i className="fas fa-user" />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleChange}
              autoFocus
              className={"form-control" + (submitted && !username ? " is-invalid" : "")}
            />
            {submitted && !username && (
              <FormControl.Feedback type="invalid">
                Username is required
              </FormControl.Feedback>
            )}
          </InputGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i className="fas fa-key" />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              className={"form-control" + (submitted && !password ? " is-invalid" : "")}
            />
            <InputGroup.Append>
              <InputGroup.Text>
                <i
                  className={`fas fa-eye${showPassword ? "" : "-slash"}`}
                  onClick={onShowPassword}
                />
              </InputGroup.Text>
            </InputGroup.Append>
            {submitted && !password && (
              <FormControl.Feedback type="invalid">Password is required</FormControl.Feedback>
            )}
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            {loggingIn && <span className="spinner-border spinner-border-sm mr-1" />}OK
          </Button>
          <Button variant="secondary" onClick={onHide}>Cancel</Button>
        </Modal.Footer>
      </Form>
      <ServiceAlert />
    </Modal>
  );
}
