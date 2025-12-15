import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <Header onNavigate={setCurrentPage} />
      {currentPage === 'home' && <Body />}
      {currentPage === 'contact' && <ContactForm />}
      <Footer />
    </div>
  );
}

export default App;
