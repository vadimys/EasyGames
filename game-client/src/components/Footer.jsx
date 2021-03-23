import React from 'react';
import {Navbar} from 'react-bootstrap';

const Footer = () => (
  <footer className='navbar-expand-md navbar-dark bg-dark fixed-bottom'>
    <Navbar>
      <div className='mx-auto font-weight-light text-info'>Copyright © {new Date().getFullYear()} EasyGames.com</div>
    </Navbar>
  </footer>
);

export default Footer;
