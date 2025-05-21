import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#0B0B22] text-white shadow-md">
      <div className="text-xl font-bold">weeb</div>
      <nav className="flex gap-6 items-center text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/login" className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700">
          Connexion
        </Link>
      </nav>
    </header>
  );
}

export default Header;
