import "./MovieCard.css";

const MovieCard = (props) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="card" onClick={props.onShowMore}>
      <img src={`${imgUrl}${props.data.poster_path}`} alt='Not Found!' />
    </div>
  );
};

export default MovieCard;
