import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-blue-600 p-4 text-white w-full fixed top-0 left-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">My Blog</Link>
        {isAuthenticated ? (
          <button onClick={logout} className="ml-4">Logout</button>
        ) : (
          <Link to="/login" className="ml-4">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
