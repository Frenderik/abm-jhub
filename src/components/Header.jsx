import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../assets/ABM-Logo.png';

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img 
            src={logo} 
            alt="ABM Kenya Logo" 
            className="h-20 transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

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

        <button className="md:hidden text-blue-600 hover:text-blue-800 focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
