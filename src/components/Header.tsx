import  { useState } from 'react';
import { Menu, X, Settings } from 'lucide-react';

interface HeaderProps {
  onAdminClick: () => void;
}

export default function Header({ onAdminClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">💍 Elegant Weddings</div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-gray-300 transition-colors">Home</a>
              <a href="#services" className="text-white hover:text-gray-300 transition-colors">Services</a>
              <a href="#gallery" className="text-white hover:text-gray-300 transition-colors">Gallery</a>
              <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
              <button
                onClick={onAdminClick}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={onAdminClick}
              className="text-white hover:text-gray-300 transition-colors mr-4"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            <a href="#home" className="block px-3 py-2 text-white hover:text-gray-300">Home</a>
            <a href="#services" className="block px-3 py-2 text-white hover:text-gray-300">Services</a>
            <a href="#gallery" className="block px-3 py-2 text-white hover:text-gray-300">Gallery</a>
            <a href="#contact" className="block px-3 py-2 text-white hover:text-gray-300">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
 