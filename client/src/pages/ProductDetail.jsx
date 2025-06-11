import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../services/api";
import Spinner from "../components/Spinner";

const ProductDetail = () => {
  const { id } = useParams();
  const [perfume, setPerfume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/perfumes/${id}`);
        setPerfume(res.data);
        setSelectedImage(res.data.images?.[0]);

        const reviewRes = await axios.get(`/api/reviews/${id}`);
        setReviews(reviewRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <Spinner />;
  if (!perfume)
    return (
      <div className="text-center py-10 text-gray-700 dark:text-gray-300">
        Product not found
      </div>
    );

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.stars, 0) / reviews.length
      : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-white dark:bg-[#0f0f0f] text-black dark:text-white min-h-screen transition-colors duration-300">
      <Link
        to="/"
        className="text-[#d1a954] hover:underline text-sm mb-6 inline-block font-medium"
      >
        ← Back to Home
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Images */}
        <div>
          <img
            src={selectedImage}
            alt="Perfume"
            onClick={() => setShowModal(true)}
            className="w-full h-[400px] object-cover rounded-xl border border-gray-300 dark:border-[#2a2a2a] shadow-xl mb-4 cursor-pointer hover:brightness-110 transition"
          />

          <div className="flex gap-3 overflow-x-auto">
            {perfume.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumb ${i}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded-md border border-gray-300 dark:border-[#2a2a2a] cursor-pointer transition-all duration-200 ${
                  selectedImage === img ? "ring-2 ring-[#d1a954]" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1">
            Men's Collection
          </p>
          <h1 className="text-3xl font-bold">{perfume.name}</h1>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            {perfume.description}
          </p>

          <div className="flex items-center mt-5 gap-4">
            <span className="text-2xl font-bold">₹{perfume.price}</span>
            <span className="bg-[#f2f2f2] dark:bg-[#2a2a2a] text-[#d1a954] px-2 py-1 rounded text-sm font-semibold">
              25% OFF
            </span>
            <del className="text-gray-500">
              ₹{(perfume.price * 1.33).toFixed(0)}
            </del>
          </div>

          <div className="mt-6">
            <label className="block mb-1 text-gray-600 dark:text-gray-400">
              Size
            </label>
            <select className="border border-gray-300 dark:border-[#2a2a2a] bg-white dark:bg-[#1c1c1c] text-black dark:text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d1a954]">
              <option>50ml</option>
              <option>100ml</option>
              <option>150ml</option>
            </select>
          </div>

          <div className="mt-6">
            <button className="w-full bg-[#d1a954] text-black px-6 py-3 rounded-lg hover:bg-[#b79343] transition-all font-semibold tracking-wide">
              🛒 Add to Cart
            </button>
          </div>

          {/* Ratings & Reviews */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-2">Customer Reviews</h2>

            {reviews.length > 0 && (
              <div className="flex items-center gap-2 mb-4">
                <div className="text-yellow-400 text-lg">
                  {"★".repeat(Math.round(avgRating))}
                  {"☆".repeat(5 - Math.round(avgRating))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {avgRating.toFixed(1)} / 5 ({reviews.length} reviews)
                </p>
              </div>
            )}

            <div className="space-y-3">
              {reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#1c1c1c] text-black dark:text-white p-4 rounded-xl shadow-sm border border-gray-300 dark:border-[#2a2a2a]"
                >
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold">{rev.username}</h4>
                    <div className="text-yellow-400 text-sm">
                      {"★".repeat(rev.stars)}
                      {"☆".repeat(5 - rev.stars)}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-400">
                    {rev.comment}
                  </p>
                </div>
              ))}
            </div>

            {reviews.length === 0 && (
              <p className="text-gray-500 mt-3">
                No reviews yet for this product.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ✅ MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative max-w-3xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold z-50 hover:text-[#d1a954] transition"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Zoomed Perfume"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
