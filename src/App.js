import './App.css';
import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import ContactForm from './components/ContactForm';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  const getPageFromHash = () => {
    const hash = (window.location.hash || '').toLowerCase();
    if (hash === '#contact') return 'contact';
    if (hash === '#info') return 'info';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(() => getPageFromHash());

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = '#home';
    }

    const onHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', onHashChange);
    onHashChange();
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const onNavigate = useMemo(() => {
    return (hash) => {
      window.location.hash = hash;
    };
  }, []);

  return (
    <div className="App">
      <Header onNavigate={onNavigate} />
      {currentPage === 'home' && <Body />}
      {currentPage === 'info' && <Info />}
      {currentPage === 'contact' && <ContactForm />}
      <Footer />
    </div>
  );
}

export default App;
