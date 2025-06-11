import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import LandingPage from './pages/LandingPage'; 

function App() {
  return (
    <div className="bg-white dark:bg-[#0f0f0f] min-h-screen text-black dark:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Landing Page Route */}
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;