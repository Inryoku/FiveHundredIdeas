import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { removeFavorite } from "../features/favorites/favoritesSlice";
import { Movie } from "../features/movies/moviesSlice";
import React from "react";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);

  if (favorites.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">
        お気に入りはまだありません。
      </p>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">お気に入り一覧</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.map((movie: Movie) => (
          <li
            key={movie.imdbID}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="font-semibold text-lg">
                {movie.Title} ({movie.Year})
              </p>
              <button
                onClick={() => dispatch(removeFavorite(movie.imdbID))}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                お気に入りから削除
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
