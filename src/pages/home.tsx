import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-800 to-black text-white flex flex-col items-center justify-center ">
      <h1 className="text-6xl font-extrabold mb-6 text-pink-500 drop-shadow-[0_5px_10px_rgba(255,105,180,0.8)]">
        Welcome to MovieVerse
      </h1>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl text-center drop-shadow-md">
        Dive into a world of movies and create your own story. Add your
        favorites and explore the cinematic universe like never before.
      </p>
      <div className="flex justify-center gap-6">
        <Link
          to="/movies"
          className="px-8 py-4 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transform hover:scale-105 transition duration-300"
        >
          Explore Movies
        </Link>
        <Link
          to="/favorites"
          className="px-8 py-4 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transform hover:scale-105 transition duration-300"
        >
          View Favorites
        </Link>
      </div>
      <footer className="absolute bottom-4 text-gray-500 text-sm">
        <p>Life is Strange vibes, powered by pop punk energy 🎸</p>
      </footer>
    </div>
  );
};

export default Home;
