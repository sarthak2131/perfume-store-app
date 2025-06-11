import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ perfume }) => {
  const { addToCart } = useContext(CartContext);

  const avgRating = Math.round(perfume.rating * 10) / 10; 

  return (
    <div className="group bg-white dark:bg-[#1c1c1c] text-black dark:text-white rounded-xl overflow-hidden border border-gray-200 dark:border-[#2a2a2a] transition-all duration-500 shadow-md hover:shadow-2xl hover:border-[#d1a954] hover:scale-[1.03] hover:brightness-105 hover:dark:border-[#d1a954] transform w-full max-w-[250px]">
      <Link to={`/product/${perfume._id}`}>
        <div className="overflow-hidden">
          <img
            src={perfume.images?.[0]}
            alt={perfume.name}
            className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      <div className="p-3">
        <h2 className="font-semibold text-base truncate group-hover:text-[#d1a954] transition-colors duration-300">
          {perfume.name}
        </h2>

        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
          {perfume.shortDescription}
        </p>

        <div className="flex items-center justify-between mt-2 text-sm">
          <div className="text-yellow-400">
            {'★'.repeat(Math.round(avgRating))}
            {'☆'.repeat(5 - Math.round(avgRating))}
          </div>
          <span className="text-gray-600 dark:text-gray-400 text-xs">{avgRating}/5</span>
        </div>

        <p className="text-[#d1a954] font-bold text-lg mt-1">₹{perfume.price}</p>

      <button
  onClick={() => {
    console.log('addToCart clicked for:', perfume); 
    addToCart(perfume);
  }}
  className="mt-3 w-full bg-[#d1a954] text-black py-2 rounded-md font-semibold hover:bg-[#b79343] transition-all"
>
  🛒 Add to Cart
</button>
      </div>
    </div>
  );
};

export default ProductCard;
