import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Dropdown, DropdownButton, Nav, Navbar } from "react-bootstrap";
import logo from "../styles/img/logo.svg";
import auth from "../redux/actions/AuthActions";
import Login from "../controls/auth/Login";
import Registration from "../controls/auth/Registration";
import { useHistory } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { isLoggedIn } = useSelector(state => state.login);
  const { registered } = useSelector(state => state.registration);
  const onLogout = useCallback(() => dispatch(auth.onLogOut()), [dispatch]);
  const moveTo = (path) => history.push(path);
  const onRegister = () => setShowRegister(true);
  const onLogin = useCallback(() => {
    onLogout();
    setShowLogin(true);
  },[onLogout]);

  useEffect(() => {
    registered && !isLoggedIn && !showLogin && onLogin();
  }, [isLoggedIn, onLogin, registered, showLogin]);

  return (
    <div>
      <Navbar className="navbar-expand-md navbar-dark fixed-top bg-dark">
        <Navbar.Brand onClick={moveTo.bind(this, "/")}>
          <img alt="EasyGames" src={logo} width="30" height="30" className="d-inline-block align-top mr-2" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={moveTo.bind(this, "/games")}>
            <i className="fas fa-puzzle-piece mr-2" />Games
          </Nav.Link>
          <Nav.Link onClick={moveTo.bind(this, "/history")}>
            <i className="fas fa-ghost mr-2" />History
          </Nav.Link>
          {isLoggedIn && <Nav.Link onClick={moveTo.bind(this, "/favorites")}>
            <i className="fas fa-bookmark mr-2" />Favorites
          </Nav.Link>}
        </Nav>
        {isLoggedIn ? <>
          <DropdownButton id="dropdown-menu-align-right" menuAlign="right" variant="outline-info"
                          title={<><i className="fas fa-user mr-2" />Menu</>}>
            <Dropdown.Item onClick={moveTo.bind(this, "/favorites")}>
              <i className="fas fa-bookmark mr-2" /> Favorites
            </Dropdown.Item>
            <Dropdown.Item onClick={moveTo.bind(this, "/settings")}>
              <i className="fas fa-cog mr-2" />Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={onLogout}><i className="fas fa-sign-out-alt mr-2" /> Log out</Dropdown.Item>
          </DropdownButton>
        </> : <>
          <Button className="mr-2" variant="outline-light" onClick={onLogin}>Log in</Button>
          <Button variant="outline-info" onClick={onRegister}>Sign up</Button>
        </>}
        <Login show={showLogin} onHide={() => setShowLogin(false)} />
        <Registration show={showRegister} onHide={() => setShowRegister(false)} />
      </Navbar>
    </div>
  );
}
