import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function MailButton({ toggleModal }) {
  return (
    <button className="mail__btn click" onClick={toggleModal}>
      <FontAwesomeIcon icon={faEnvelope} />
    </button>
  );
}

export default MailButton;