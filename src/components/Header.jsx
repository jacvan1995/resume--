import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo-transparent-svg.svg'

function Header() {
  return (
    <nav>
        <img src={Logo} alt="Personal Logo" className="logo"/>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Header