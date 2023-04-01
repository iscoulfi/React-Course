import { NavLink, useLocation } from 'react-router-dom';

const Navibar = () => {
  const location = useLocation();
  let currentPage = '';

  switch (location.pathname) {
    case '/':
      currentPage = 'Home';
      break;
    case '/about':
      currentPage = 'About us';
      break;
    case '/forms':
      currentPage = 'Forms';
      break;
  }

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
      <p className="current">{`Current: ${currentPage}`}</p>
    </header>
  );
};

export default Navibar;
