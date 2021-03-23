import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import auth from '../redux/actions/AuthActions';
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap';
import {Redirect} from 'react-router';

export default function RegisterPage() {
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const registered = useSelector(state => state.registration.registered);
  const registering = useSelector(state => state.registration.registering);
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(auth.logout());
  }, []);

  if (registered) {
    return <Redirect push to='/login'/>
  }

  return (
    <div className='col-lg-8 offset-lg-2'>
      <div className='h2 text-info'>Register</div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl type='email' name='email' value={user.email} onChange={handleChange}
                       placeholder='Enter email' autoFocus
                       className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} />
          {submitted && !user.email &&
          <FormControl.Feedback type='invalid'>Email is required</FormControl.Feedback>
          }
        </FormGroup>
        <FormGroup>
          <FormControl type='text' name='username' value={user.username} onChange={handleChange}
                       placeholder='Username'
                       className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
          {submitted && !user.username &&
          <FormControl.Feedback type='invalid'>Username is required</FormControl.Feedback>
          }
        </FormGroup>
        <FormGroup>
          <FormControl type='password' name='password' value={user.password} onChange={handleChange}
                       placeholder='Password'
                       className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
          {submitted && !user.password &&
          <FormControl.Feedback type='invalid'>Password is required</FormControl.Feedback>
          }
        </FormGroup>
        <Button variant='primary' type='submit' className='mr-2'>
          {registering && <span className='spinner-border spinner-border-sm mr-1'> </span>}
          Register
        </Button>
        <Button variant='secondary' href='/'>Cancel</Button>
      </Form>
    </div>
  );
}
