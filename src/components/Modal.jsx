import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import { useState } from 'react';

export default function Modal({ isOpen, toggleModal }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setLoading(false);
        setSuccess(true);
        e.target.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setLoading(false);
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Left Half: About */}
          <motion.div
            className="modal__half modal__about"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="modal__title modal__title--about">Here's a bit about me.</h3>
            <h4 className="modal__sub-title modal__sub-title--about">Frontend Software Engineer.</h4>
            <p className="modal__para">
              I'm a 30 year-old American <b className="orange">frontend software engineer</b> with experience
              developing websites for top-tech companies like <b className="orange"></b> and <b className="orange"></b>.
            </p>
            <div className="modal__languages">
              {[
                {
                  name: 'HTML',
                  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png',
                },
                {
                  name: 'CSS',
                  src: 'https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png',
                },
                {
                  name: 'JavaScript',
                  src: 'https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png',
                },
                {
                  name: 'React',
                  src: 'https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png',
                },
              ].map(({ name, src }) => (
                <figure className="modal__language" key={name}>
                  <img className="modal__language--img" src={src} alt={name} />
                  <span className="language__name">{name}</span>
                </figure>
              ))}
            </div>
          </motion.div>

          {/* Right Half: Contact */}
          <motion.div
            className="modal__half modal__contact"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
          >
            <FontAwesomeIcon icon={faTimes} className="modal__exit click" onClick={toggleModal} />
            <h3 className="modal__title modal__title--contact">Let's have a chat!</h3>
            <h3 className="modal__sub-title modal__sub-title--contact">I'm currently open to new opportunities.</h3>

            <form id="contact__form" onSubmit={sendEmail}>
              <div className="form__item">
                <label className="form__item--label">Name</label>
                <input className="input" name="user_name" type="text" required />
              </div>
              <div className="form__item">
                <label className="form__item--label">Email</label>
                <input className="input" name="user_email" type="email" required />
              </div>
              <div className="form__item">
                <label className="form__item--label">Message</label>
                <textarea className="input" name="message" required />
              </div>
              <button id="contact__submit" className="form__submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send it my way'}
              </button>
            </form>

            {loading && (
              <div className="modal__overlay modal__overlay--loading">
                <FontAwesomeIcon icon={faSpinner} spin />
              </div>
            )}

            {success && (
              <div className="modal__overlay modal__overlay--success">
                Thanks for the message! Looking forward to speaking to you soon.
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}