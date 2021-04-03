import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import auth from '../redux/actions/AuthActions';
import { Button, Form, FormControl, InputGroup, Modal } from 'react-bootstrap';
import alertActions from '../redux/actions/AlertActions';

export function RegisterPage(props) {
  const dispatch = useDispatch();
  const [showDlg, setShowDlg] = useState(props.show);
  const [showAlert, setShowAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { registering, registered } = useSelector(state => state.registration);
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState({ email: '', username: '', password: '' });
  const { alert } = useSelector(state => state);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser(user => ({ ...user, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (user.email && user.username && user.password) {
      dispatch(auth.register({
        username: user.username,
        email: user.email,
        password: user.password
      }));
    }
  };
  const onShowPassword = () => setShowPassword(!showPassword);
  const onHideDialog = () => {
    setShowDlg(false);
    props.onHide();
  };

  useEffect(() => {
    if (alert.message) {
      const timer = setTimeout(() => setShowAlert(false), 5000);

      setShowAlert(true);

      return () => clearTimeout(timer);
    }
  }, [alert.message]);

  useEffect(() => {
    dispatch(alertActions.clear());
    dispatch(auth.logout());
  }, []);

  useEffect(() => {
    registered && onHideDialog();
  }, [registered]);

  return (
    <Modal show={showDlg} size='sm' aria-labelledby='contained-modal-title-vcenter' centered onHide={onHideDialog}>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter' className='h2 text-info'>
          Registration
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i className='fas fa-envelope' />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type='email' name='email' value={user.email} onChange={handleChange}
                         placeholder='Enter email' autoFocus
                         className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} />
            {submitted && !user.email &&
            <FormControl.Feedback type='invalid'>Email is required</FormControl.Feedback>
            }
          </InputGroup>
          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i className='fas fa-user' />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type='text' name='username' value={user.username} onChange={handleChange}
                         placeholder='Username'
                         className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
            {submitted && !user.username &&
            <FormControl.Feedback type='invalid'>Username is required</FormControl.Feedback>
            }
          </InputGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i className='fas fa-key' />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type={showPassword ? 'text' : 'password'} name='password' value={user.password}
                         onChange={handleChange}
                         placeholder='Password'
                         className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
            <InputGroup.Append>
              <InputGroup.Text>
                <i className={showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'} onClick={onShowPassword} />
              </InputGroup.Text>
            </InputGroup.Append>
            {submitted && !user.password &&
            <FormControl.Feedback type='invalid'>Password is required</FormControl.Feedback>
            }
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' type='submit' className='mr-2'>
            {registering && <span className='spinner-border spinner-border-sm mr-1'> </span>}
            Register
          </Button>
          <Button variant='secondary' href='/'>Cancel</Button>
        </Modal.Footer>
      </Form>
      {showAlert ? <div className={`alert ${alert.type}`}>{alert.message}</div> : null}
    </Modal>
  );
}
