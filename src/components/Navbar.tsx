import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">SocialApp</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/profile" className="hover:underline">Profile</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/signup" className="hover:underline">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
