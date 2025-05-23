import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray_header">
      <div className="w-full max-w-custom flex items-center justify-between mx-auto px-6 py-4 rounded-b-xl shadow-xl">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link to="/" className="text-3xl font-bold">weeb</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6 text-sm font-medium items-center">
          <Link to="/" className="hover:underline text-base">About Us</Link>
          <Link to="/contact" className="hover:underline text-base">Contact</Link>
          <Link to="/login" className="hover:underline text-base font-medium">Log In</Link>
          <Button className="px-6">Join Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden bg-purple-600 text-white p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden bg-gray_header px-6 py-4 space-y-2 text-sm font-medium shadow-md rounded-b-xl">
          <Link to="/" className="block">About Us</Link>
          <Link to="/contact" className="block">Contact</Link>
          <Link to="/login" className="block">Log In</Link>
          <Button className="w-full">Join Now</Button>
        </div>
      )}
    </header>
  );
}

export default Header;
