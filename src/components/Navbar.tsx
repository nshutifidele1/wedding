import  { useState } from 'react';
import { Menu, X, Settings } from 'lucide-react';

interface NavbarProps {
  onAdminClick: () => void;
}

export default function Navbar({ onAdminClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">WeddingDecor</div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-gray-300">Home</a>
            <a href="#services" className="text-white hover:text-gray-300">Services</a>
            <a href="#gallery" className="text-white hover:text-gray-300">Gallery</a>
            <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
            <button 
              onClick={onAdminClick}
              className="text-gray-400 hover:text-white"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-white hover:text-gray-300">Home</a>
            <a href="#services" className="block px-3 py-2 text-white hover:text-gray-300">Services</a>
            <a href="#gallery" className="block px-3 py-2 text-white hover:text-gray-300">Gallery</a>
            <a href="#contact" className="block px-3 py-2 text-white hover:text-gray-300">Contact</a>
            <button 
              onClick={onAdminClick}
              className="block px-3 py-2 text-gray-400 hover:text-white"
            >
              Admin
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
 