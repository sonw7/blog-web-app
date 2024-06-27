import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="container mx-auto">
        <Link to="/" className="text-lg font-bold">My Blog</Link>
      </nav>
    </header>
  );
}

export default Header;
