import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MailButton from './components/MailButton/MailButton';
import Modal from './components/Modal/Modal';
import './styles/App.css';
import { Outlet, useLocation } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import {
  moveBackground,
  toggleContrast,
  contact,
  toggleModal
} from './utils.js';

function App() {
  const location = useLocation();
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen((prev) => !prev);



  return (
    <>
      <Header />
      <MailButton toggleModal={toggleModal} />
      <Modal isOpen={isModalOpen} toggleModal={toggleModal} />
      <AnimatePresence mode="wait">
        <div key={location.pathname}>
          <Outlet />
        </div>
      </AnimatePresence>
      <Footer />
      <TanStackRouterDevtools/>
    </>
  );
}

export default App;

