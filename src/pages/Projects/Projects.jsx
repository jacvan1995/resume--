import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Projects.css"; // Optional: move styles here

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
      {
        <section id="projects">
          <div className="container">
            <div className="row">
              <h1 className="section__title">
                Here are some of my <span className="orange">projects</span>
              </h1>
              <ul className="project__list">
                {/* Project 1 */}
                <li className="project">
                  <div className="project__wrapper">
                    <img src="*" className="project__img" alt="Project 1" />
                    <div className="project__wrapper--bg"></div>
                    <div className="project__description">
                      <h3 className="project__description--title">
                        Project Title
                      </h3>
                      <h4 className="project__description--sub-title">
                        Project Language
                      </h4>
                      <p className="project__description--para">
                        Project Description
                      </p>
                      <div className="project__description--links">
                        <a href="*" className="project__description--link">
                          <FontAwesomeIcon icon={faLink} />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Project 2 */}
                <li className="project">
                  <div className="project__wrapper">
                    <img src="*" className="project__img" alt="Project 2" />
                    <div className="project__wrapper--bg"></div>
                    <div className="project__description">
                      <h3 className="project__description--title">
                        Project Title
                      </h3>
                      <h4 className="project__description--sub-title">
                        Project Language
                      </h4>
                      <p className="project__description--para">
                        Project Description
                      </p>
                    </div>
                  </div>
                </li>

                {/* Project 3 */}
                <li className="project">
                  <div className="project__wrapper">
                    <img src="*" className="project__img" alt="Project 3" />
                    <div className="project__wrapper--bg"></div>
                    <div className="project__description">
                      <h3 className="project__description--title">
                        Project Title
                      </h3>
                      <h4 className="project__description--sub-title">
                        Project Language
                      </h4>
                      <p className="project__description--para">
                        Project Description
                      </p>
                      <div className="project__description--links">
                        <a
                          href="*"
                          target="_blank"
                          className="project__description--link"
                        >
                          <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a
                          href="*"
                          target="_blank"
                          className="project__description--link"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                          href="*"
                          target="_blank"
                          className="project__description--link"
                        >
                          <FontAwesomeIcon icon={faLink} />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      }
      ;
    </motion.div>
  );
}
