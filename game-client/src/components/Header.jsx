import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, DropdownButton, Nav, Navbar, Dropdown } from 'react-bootstrap';
import logo from '../styles/img/logo.svg';
import { useHistory } from 'react-router';
import auth from '../redux/actions/AuthActions';
import Pages from '../pages';

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { isLoggedIn } = useSelector(state => state.authentication);
  const { registered } = useSelector(state => state.registration);
  const onLogout = () => {
    dispatch(auth.logout());
    history.push('/');
  };

  useEffect(() => {
    registered && setShowLogin(true);
  }, [registered]);

  return (
    <div>
      <Navbar className='navbar-expand-md navbar-dark fixed-top bg-dark'>
        <Navbar.Brand href='/'>
          <img alt='EasyGames' src={logo} width='30' height='30' className='d-inline-block align-top mr-2'/>
        </Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/games'><i className='fas fa-puzzle-piece mr-2'/>Games</Nav.Link>
          <Nav.Link href='/history'><i className='fas fa-ghost mr-2'/>History</Nav.Link>
          {isLoggedIn && <Nav.Link href='/mygames'><i className='fas fa-gamepad mr-2'/>My games</Nav.Link>}
        </Nav>
        {isLoggedIn ?
          <>
            <DropdownButton id='dropdown-menu-align-right'
                            menuAlign='right'
                            variant='outline-info'
                            title={<><i className='fas fa-user mr-2'/>{'Menu'}</>}>
              <Dropdown.Item><i className='fas fa-gamepad mr-2'/>My games</Dropdown.Item>
              <Dropdown.Item><i className='fas fa-cog mr-2'/> Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={onLogout}><i className='fas fa-sign-out-alt mr-2' /> Log out</Dropdown.Item>
            </DropdownButton>
          </> :
          <>
            <Button className='mr-2' variant='outline-light' onClick={() => setShowLogin(true)}>Log in</Button>
            <Button variant='outline-info' onClick={() => setShowRegister(true)}>Sign up</Button>
          </>}
        {showLogin && <Pages.Login show={true} onHide={() => setShowLogin(false)}/>}
        {showRegister && <Pages.Registration show={true} onHide={() => setShowRegister(false)}/>}
      </Navbar>
    </div>
  );
}
