import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">
        YouTube Clone
      </Link>
      <div className="flex gap-4">
        <Link to="/dashboard" className="hover:text-red-500">Dashboard</Link>
        <Link to="/profile" className="hover:text-red-500">Profile</Link>
        <Link to="/login" className="hover:text-red-500">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
