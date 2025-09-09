import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

export default function Footer() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {
        <footer>
          <div className="container">
            <div className="row footer__row">
              <a href="#" className="footer__anchor">
                <figure className="footer__logo">
                  <img src={Logo} className="footer__logo--img" alt="Logo" />
                </figure>
                <span className="footer__logo--popper">
                  Top <FontAwesomeIcon icon={faArrowUp} />
                </span>
              </a>

              <div className="footer__social--list">
                <a
                  href="https://github.com/jacvan1995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social--link link__hover-effect link__hover-effect--white"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jackvantassel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social--link link__hover-effect link__hover-effect--white"
                >
                  LinkedIn
                </a>
                <button
                  onClick={toggleModal}
                  className="footer__social--link link__hover-effect link__hover-effect--white"
                >
                  Contact
                </button>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social--link link__hover-effect link__hover-effect--white"
                >
                  Resume
                </a>
              </div>

              <div className="footer__copyright">
                Copyright &copy; 2025 Jack VanTassel
              </div>
            </div>
          </div>
        </footer>
      }
    </motion.div>
  );
}
