import Logo from "../../assets/logo-transparent-svg.svg";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Header.css'



const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

function Header({toggleContrast}) {
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
            <Link
              to="/about"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
            >
              About
            </Link>
          </li>
          <li className="nav__link">
            <Link
              to="/projects"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
            >
              Projects
            </Link>
          </li>
          <li className="nav__link">
            <Link
              to="/contact"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
            >
              Contact
            </Link>
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
