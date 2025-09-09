import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MailButton from './components/MailButton/MailButton';
import Modal from './components/Modal/Modal';
import './styles/App.css';
import { Outlet, useLocation } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

function App() {
  const location = useLocation();
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen((prev) => !prev);
    const [isHighContrast, darkTheme] = useState(false);

  const toggleContrast = () => {
   darkTheme(prev => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle('high-contrast', isHighContrast);
  }, [isHighContrast]);


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

