import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Dropdown, DropdownButton, Nav, Navbar } from "react-bootstrap";
import logo from "../styles/img/logo.svg";
import auth from "../redux/actions/AuthActions";
import Pages from "../pages";
import { useHistory } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { isLoggedIn } = useSelector(state => state.login);
  const { registered } = useSelector(state => state.registration);
  const onLogout = () => dispatch(auth.onLogOut());
  const moveTo = (path) => history.push(path);

  useEffect(() => history.listen((data) => {
    if (data.pathname === '/') {
      showRegister && setShowRegister(false);
      showLogin && setShowLogin(false);
    }
  }), []);

  useEffect(() => {
    registered && setShowLogin(true);
  }, [registered]);

  return (
    <div>
      <Navbar className='navbar-expand-md navbar-dark fixed-top bg-dark'>
        <Navbar.Brand onClick={moveTo.bind(this,'/')}>
          <img alt='EasyGames' src={logo} width='30' height='30' className='d-inline-block align-top mr-2' />
        </Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link onClick={moveTo.bind(this,'/games')}>
            <i className='fas fa-puzzle-piece mr-2' />Games
          </Nav.Link>
          <Nav.Link onClick={moveTo.bind(this,'/history')}>
            <i className='fas fa-ghost mr-2' />History
          </Nav.Link>
          {isLoggedIn && <Nav.Link onClick={moveTo.bind(this,'/favorites')}>
            <i className='fas fa-bookmark mr-2' />Favorites
          </Nav.Link>}
        </Nav>
        {isLoggedIn ? <>
          <DropdownButton id='dropdown-menu-align-right' menuAlign='right' variant='outline-info'
                          title={<><i className='fas fa-user mr-2' />Menu</>}>
            <Dropdown.Item onClick={moveTo.bind(this,'/favorites')}>
              <i className='fas fa-bookmark mr-2' /> Favorites
            </Dropdown.Item>
            <Dropdown.Item onClick={moveTo.bind(this,'/settings')}>
              <i className='fas fa-cog mr-2' />Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={onLogout}><i className='fas fa-sign-out-alt mr-2' /> Log out</Dropdown.Item>
          </DropdownButton>
        </> : <>
          <Button className='mr-2' variant='outline-light' onClick={() => setShowLogin(true)}>Log in</Button>
          <Button variant='outline-info' onClick={() => setShowRegister(true)}>Sign up</Button>
        </>}
        {showLogin && <Pages.Login show onHide={() => setShowLogin(false)} />}
        {showRegister && <Pages.Registration show onHide={() => setShowRegister(false)} />}
      </Navbar>
    </div>
  );
}
