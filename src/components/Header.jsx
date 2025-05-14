import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../assets/ABM-Logo.png';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center group" onClick={closeMenu}>
          <img 
            src={logo} 
            alt="ABM Kenya Logo" 
            className="h-20 transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link 
            to="/" 
            className={`px-5 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 border ${location.pathname === '/' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-100 hover:bg-blue-600 hover:text-white'}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`px-5 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 border ${location.pathname === '/about' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-100 hover:bg-blue-600 hover:text-white'}`}
          >
            About ABM
          </Link>
          <Link 
            to="/projects" 
            className={`px-5 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 border ${location.pathname === '/projects' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-100 hover:bg-blue-600 hover:text-white'}`}
          >
            Projects
          </Link>
          <Link 
            to="/resources" 
            className={`px-5 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 border ${location.pathname === '/resources' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-100 hover:bg-blue-600 hover:text-white'}`}
          >
            Resources
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-blue-600 hover:text-blue-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-24 right-0 left-0 bg-white shadow-lg z-50">
            <nav className="flex flex-col space-y-2 p-4">
              <Link 
                to="/" 
                onClick={closeMenu}
                className={`px-5 py-3 rounded-full font-medium shadow-sm transition-all duration-300 border ${location.pathname === '/' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-100 hover:bg-blue-600 hover:text-white'}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={closeMenu}
                className={`px-5 py-3 rounded-full font-medium shadow-sm transition-all duration-300 border ${location.pathname === '/about' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-100 hover:bg-blue-600 hover:text-white'}`}
              >
                About ABM
              </Link>
              <Link 
                to="/projects" 
                onClick={closeMenu}
                className={`px-5 py-3 rounded-full font-medium shadow-sm transition-all duration-300 border ${location.pathname === '/projects' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-100 hover:bg-blue-600 hover:text-white'}`}
              >
                Projects
              </Link>
              <Link 
                to="/resources" 
                onClick={closeMenu}
                className={`px-5 py-3 rounded-full font-medium shadow-sm transition-all duration-300 border ${location.pathname === '/resources' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-100 hover:bg-blue-600 hover:text-white'}`}
              >
                Resources
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}