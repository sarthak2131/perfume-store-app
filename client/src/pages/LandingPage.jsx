import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // make sure the path is correct

const LandingPage = () => {
  return (
    <div className="relative min-h-screen text-white flex flex-col justify-center items-center px-6 text-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506915925765-ed31516b9080?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Perfume background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Foreground Content */}
      <div className="z-10 flex flex-col items-center">
        {/* Big Logo */}
        <img
          src={logo}
          alt="Itrika Logo"
          className="h-32 md:h-40 w-auto object-contain mb-6 animate-fadeInUp"
        />

        <h1 className="text-4xl md:text-6xl font-extrabold text-[#d1a954] drop-shadow-md animate-fadeInUp">
          Welcome to <span className="italic">Itrika</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl mx-auto animate-fadeIn delay-200">
          Discover luxury fragrances made to impress. Explore our exclusive collection crafted for every personality and mood.
        </p>
        <Link
          to="/home"
          className="inline-block mt-8 bg-[#d1a954] hover:bg-[#b79343] text-black font-semibold px-8 py-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 animate-fadeIn delay-300"
        >
          🌸 Explore Collection
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
