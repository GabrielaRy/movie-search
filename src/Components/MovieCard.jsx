import React from "react"

function MovieCard({movie}) {
    return(
        <div className="card" key={movie.id}>
        <h3>{movie.title}</h3>
        <img className="card--img" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + ' poster'}/>
        <div className="card-content">
        <p>Release date: {movie.release_date}</p>
        <p>Ratings: {movie.vote_avarage}</p>
        <p className="card--desc">{movie.overview}</p>
        </div>
        </div>
    )

}
export default MovieCard