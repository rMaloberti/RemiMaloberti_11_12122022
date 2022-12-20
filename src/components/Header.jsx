import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img alt="Logo KASA" src="./assets/logo.svg" />
      </div>
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `header__nav__link ${isActive ? 'header__nav__link--active' : ''}`
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) =>
            `header__nav__link ${isActive ? 'header__nav__link--active' : ''}`
          }
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
