import  { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import Login from './components/Login';

interface Message {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: string;
}

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [adminUsers, setAdminUsers] = useState([
    { id: 1, name: 'Admin User', email: 'admin@wedding.com', role: 'admin' }
  ]);

  const handleMessageSent = (message: Message) => {
    setMessages([...messages, message]);
  };

  const handleDeleteMessage = (id: number) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };

  const handleDeleteUser = (id: number) => {
    setAdminUsers(adminUsers.filter(user => user.id !== id));
  };

  const handleAdminLogin = (email: string, password: string) => {
    if (email === 'admin@wedding.com' && password === 'admin123') {
      setIsAdminAuthenticated(true);
      setCurrentView('admin');
      return true;
    }
    return false;
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setCurrentView('home');
  };

  if (currentView === 'admin' && !isAdminAuthenticated) {
    return <Login onLogin={handleAdminLogin} onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'admin' && isAdminAuthenticated) {
    return (
      <Admin 
        messages={messages}
        adminUsers={adminUsers}
        onDeleteMessage={handleDeleteMessage}
        onDeleteUser={handleDeleteUser}
        onBackToHome={handleAdminLogout}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header onAdminClick={() => setCurrentView('admin')} />
      <Hero />
      <Services />
      <Gallery />
      <Contact onMessageSent={handleMessageSent} />
      <Footer />
    </div>
  );
}

export default App;
 