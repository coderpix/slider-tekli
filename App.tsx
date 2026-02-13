import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { References } from './pages/References';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // Simple Hash Router logic
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/';
      setCurrentPath(hash);
      window.scrollTo(0, 0);
    };

    // Set initial path
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home onNavigate={navigate} />;
      case '/products':
        return <Products />;
      case '/references':
        return <References />;
      case '/about':
        return <About />;
      case '/contact':
        return <Contact />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar activeTab={currentPath} onNavigate={navigate} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default App;