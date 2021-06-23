import { useEffect, useState } from "react";
import { fetchData } from "../API/movieApi";
import MovieCard from "./MovieCard";
import "./MovieContainer.css";
import InfiniteScroll from "react-infinite-scroll-component";

const MovieContainer = (props) => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  
  const fetchMovies = async (num) => {
    const moviesList = await fetchData(num);
    const newArr = [...movies, ...moviesList.results];
    setMovies(newArr);
  };

  const fetchMoreData = async (num) => {
    const newNum = page + 1;
    setPage(newNum);
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  return (
    <InfiniteScroll dataLength={movies.length} hasMore={true} next={fetchMoreData}>
      <div className="container">
        {movies.map((movie) => {
          return <MovieCard data={movie} key={movie.id} onShowMore={() => props.onShowMore(movie)}/>;
        })}
      </div>
    </InfiniteScroll>
  );
};

export default MovieContainer;
