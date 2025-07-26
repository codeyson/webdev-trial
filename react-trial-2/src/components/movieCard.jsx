function MovieCard ({movie}) {
    function onFavoriteClick() {
        alert('favorited')
    }

    return (
        <div className="movieCard">
            <div className="movie-poster">
                <img src={movie.poster} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>O</button>
                </div>
            </div>
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.releaseDate}</p>
                <p>{movie.description}</p>
            </div>
        </div>
    )
}

export default MovieCard
