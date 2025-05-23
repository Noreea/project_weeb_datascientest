import { Link } from "react-router-dom";
import Button from "./Button";

function Header() {
  return (
    <header className="">
      <div className="w-full max-w-custom flex items-center justify-between bg-gray_header mx-auto my-6 px-6 py-6 rounded-[20px] shadow-xl">

        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-[32px] font-bold">weeb</Link>
          <nav className="hidden sm:flex gap-6 text-sm font-medium">
            <Link to="/" className="hover:underline text-base font-medium">About Us</Link>
            <Link to="/contact" className="hover:underline text-base ">Contact</Link>
          </nav>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link to="/login" className="hover:underline text-base font-medium">Log In</Link>
          <Button className="px-8">Join Now</Button>
        </div>

      </div>
    </header>
  );
}

export default Header;
