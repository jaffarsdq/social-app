import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold text-red-500">404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 underline">Go Home</Link>
    </div>
  );
};

export default NotFound;
