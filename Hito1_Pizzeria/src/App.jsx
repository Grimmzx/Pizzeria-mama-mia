import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'login':
        return <Login />;
      case 'register':
        return <Register />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
