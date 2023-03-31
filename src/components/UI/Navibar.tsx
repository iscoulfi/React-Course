import { NavLink } from 'react-router-dom';

const Navibar = () => {
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
            <NavLink to="forms" data-testid="forms-link">
              Forms
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navibar;
