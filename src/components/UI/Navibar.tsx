import React from 'react';
import { NavLink } from 'react-router-dom';

class Navibar extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="header__menu">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About us</NavLink>
            </li>
            <li>
              <NavLink to="forms">Forms</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navibar;
