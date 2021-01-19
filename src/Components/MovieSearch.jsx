
import React, {useState} from 'react';
import MovieCard from './MovieCard';

export default function MovieSearch(){

    //states- input query, movies
    const [query, setQuery] = useState('');

    const [movies, setMovies] = useState([]);


    const searchMovie = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=ac9ce5540c8a8d9f32660f42069132a6&language=en-US&query=${query}&page=1&include_adult=false`;    
        
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results)
            setMovies(data.results)
        }catch(err) {
            console.log(err)
        }

    }

    return(
        <div className="container">
        <h1 className="title">Movie Search</h1>
        <form onSubmit={searchMovie} className="form">
            <label htmlFor="query" className="label">Movie name</label>
            <input type="search" className="input" name="query" placeholder="i.e. Jurassic Park" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button className="btn">Submit</button>
        </form>
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
            <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
        </div>
    )
}