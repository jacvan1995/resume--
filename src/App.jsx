import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css'
import Resume from '..public/Resume.pdf'
import MailButton from './components/MailButton'
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Modal from './components/Modal';

function App() {
  const location = useLocation()
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen((prev) => !prev);

  return (
    <Router>
      <Header />
      <MailButton toggleModal={toggleModal} />
      <Modal isOpen={isModalOpen} toggleModal={toggleModal} />
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}


export default App;

