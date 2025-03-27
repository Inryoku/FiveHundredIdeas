import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../features/movies/moviesSlice";
import { RootState, AppDispatch } from "../app/store";
import { Movie } from "../features/movies/moviesSlice";
import { addFavorite } from "../features/favorites/favoritesSlice";
import React from "react";

const Movies = () => {
  const dispatch: AppDispatch = useDispatch();

  const { movies, loading, error } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading)
    return <p className="text-center text-gray-500">読み込み中...</p>;
  if (error) return <p className="text-center text-red-500">エラー：{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">映画一覧</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie: Movie) => (
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
                onClick={() => dispatch(addFavorite(movie))}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                お気に入りに追加
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
