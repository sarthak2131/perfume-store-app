import { useEffect, useState } from 'react';
import axios from '../services/api';
import Spinner from '../components/Spinner';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';

const Home = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        const res = await axios.get('/api/perfumes');
        setPerfumes(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPerfumes();
  }, []);

  const filtered = perfumes.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category ? p.category === category : true)
  );

  return (
    <div className="px-4 py-8 bg-white dark:bg-[#0f0f0f] text-black dark:text-white min-h-screen transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-6 text-center text-[#d1a954] drop-shadow-sm">
        🧔 Explore Our Signature Perfume Collection
      </h2>

      <Filters {...{ search, setSearch, category, setCategory }} />

      {loading ? (
        <Spinner />
      ) : (
    <div className="flex flex-wrap justify-center gap-6 mt-4">
  {filtered.map(p => <ProductCard key={p._id} perfume={p} />)}
</div>

      )}
    </div>
  );
};

export default Home;
