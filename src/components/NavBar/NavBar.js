import React from 'react';
import "./NavBar.scss"
import logo from '../../logo.png'

export default function NavBar() {
  return (
  <nav className="navbar">
      <img src={logo} alt="city tour logo" />
      <ul className="nav-links">
          <li >
            <a href="/" className="nav-link">Home</a>
          </li>
          <li >
            <a href="/" className="nav-link">about</a>
          </li>
          <li >
            <a href="/" className="nav-link active">tours</a>
          </li>
      </ul>
  </nav>
  );
}
