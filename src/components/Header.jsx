import Logo from '../assets/logo-transparent-svg.svg'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="nav">
      <figure>
        <img id="personal-logo" src={Logo} alt="Personal Logo" />
      </figure>
      <ul className="nav__link--list">
        <li className="nav__link">
          <NavLink
            to="/about"
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
          >
            About
          </NavLink>
        </li>
        <li className="nav__link">
          <NavLink
            to="/projects"
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
          >
            Projects
          </NavLink>
        </li>
        <li className="nav__link">
          <NavLink
            to="/contact"
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
          >
            Contact
          </NavLink>
        </li>
        <li className="nav__link click" onClick={toggleContrast}>
          <button className="nav__link--anchor link__hover-effect link__hover-effect--black">
            <i className="fas fa-adjust"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;