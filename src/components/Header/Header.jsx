import Logo from "../assets/logo-transparent-svg.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import './Header.css'


const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

function Header() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >{
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
              <FontAwesomeIcon icon={faAdjust} />
            </button>
          </li>
        </ul>
      </nav>}
    </motion.div>
  );
}

export default Header;
