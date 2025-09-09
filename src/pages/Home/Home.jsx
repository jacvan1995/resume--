import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
    {<header className="header">
      <div className="header__content">
        <h1 className="title">Hey</h1>
        <h1 className="title orange">I'm Jack.</h1>
        <p className="header__para">
          I'm a <b className="orange">Frontend Software Engineer</b> with a strong motivation for building web applications
          with great user experiences.
          <br />
          Here's a bit more{' '}
          <b className="orange click" onClick={toggleModal}>
            about me
          </b>.
        </p>
        <div className="social__list">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social__link click"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />

          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social__link click"
          >
            <FontAwesomeIcon icon={faGithub} />

          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="social__link click"
          >
            <FontAwesomeIcon icon={faEnvelope} />

          </a>
        </div>
      </div>
    </header>}
    </motion.div>
  );
}