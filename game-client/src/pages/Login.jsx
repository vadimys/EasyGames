import React, { useEffect, useState } from "react";
import auth from "../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormCheck, FormControl, FormGroup } from "react-bootstrap";

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const { username, password } = inputs;
  const loggingIn = useSelector(state => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs(inputs => ({ ...inputs, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      dispatch(auth.login(username, password));
    }
  };

  useEffect(() => {
    dispatch(auth.logout());
  }, []);


  return (
    <div className="col-lg-8 offset-lg-2">
      <div className="h2 text-info">Login</div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl type="text" name="username" placeholder="Username"
                       value={username} onChange={handleChange} autoFocus
                       className={"form-control" + (submitted && !username ? " is-invalid" : "")} />
          {submitted && !username &&
          <FormControl.Feedback type="invalid">Username is required</FormControl.Feedback>}
        </FormGroup>
        <FormGroup>
          <FormControl type="password" name="password" placeholder="Password"
                       value={password} onChange={handleChange}
                       className={"form-control" + (submitted && !password ? " is-invalid" : "")} />
          {submitted && !password &&
          <FormControl.Feedback type="invalid">Password is required</FormControl.Feedback>}
        </FormGroup>
        <FormGroup>
          <FormCheck className="text-secondary" type="checkbox" name="checkbox" label="Remember me"
                     onChange={handleChange} />
        </FormGroup>
        <Button variant="primary" type="submit">
          {loggingIn && <span className="spinner-border spinner-border-sm mr-1" />}
          Log in
        </Button>
      </Form>
    </div>
  );
}
