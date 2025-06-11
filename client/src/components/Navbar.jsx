import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-purple-600">Perfume Shop</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-600 hover:text-purple-600">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
