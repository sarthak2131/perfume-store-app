import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/api';
import Spinner from '../components/Spinner';

const ProductDetail = () => {
  const { id } = useParams();
  const [perfume, setPerfume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/perfumes/${id}`);
        setPerfume(res.data);

        const reviewRes = await axios.get(`/api/reviews/${id}`);
        setReviews(reviewRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <Spinner />;

  if (!perfume) return <div>Perfume not found</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{perfume.name}</h2>
      <p className="text-gray-600 mb-2">{perfume.description}</p>
      <div className="text-yellow-500 mb-2">
        {'★'.repeat(Math.round(perfume.rating))}{'☆'.repeat(5 - Math.round(perfume.rating))}
      </div>
      <p className="font-bold text-lg text-purple-600 mb-4">₹{perfume.price}</p>

      <div className="flex gap-4 flex-wrap mb-4">
        {perfume.images.map((img, i) => (
          <img key={i} src={img} alt="perfume" className="w-32 h-32 object-cover rounded" />
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold">Reviews</h3>
        <ul className="list-disc pl-5 mt-2">
          {reviews.map((rev, i) => (
            <li key={i} className="text-gray-700">{rev.username}: {rev.comment} ({rev.stars}⭐)</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
