import { Link } from 'react-router-dom';

const ProductCard = ({ perfume }) => {
  return (
    <Link to={`/product/${perfume._id}`} className="w-full sm:w-60 shadow-md rounded-xl overflow-hidden hover:scale-105 transition">
      <img src={perfume.image} alt={perfume.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{perfume.name}</h2>
        <p className="text-sm text-gray-500">{perfume.description.slice(0, 50)}...</p>
        <div className="text-yellow-400 mt-1">
          {'★'.repeat(Math.round(perfume.rating))}{'☆'.repeat(5 - Math.round(perfume.rating))}
        </div>
        <p className="font-bold text-purple-600 mt-2">₹{perfume.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
