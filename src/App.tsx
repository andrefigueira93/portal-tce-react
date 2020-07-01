import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/tailwind.css';

import AppProvider from './hooks';
import Routes from './routes';

import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <>
          <Header />
          <Routes />
          <Footer />
        </>
      </AppProvider>
    </Router>
  );
};

export default App;
