import './Header.scss';
import logo from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <img src={logo} alt="Logo" />
        <nav className="header__menu-container">
          <Link className="header__menu-item button-1" to="/">
            Tool
          </Link>
          <Link className="header__menu-item button-1" to="/about">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
