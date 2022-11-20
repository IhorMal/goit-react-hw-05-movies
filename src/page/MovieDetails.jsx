import css from './MovieDetails.module.css'

import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect} from 'react'
import { movieDetails } from "../Requests/Api"

const MovieDetails = () => {
    const { id } = useParams();
    const [film, setFilm] = useState(null)
    const location = useLocation();
    useEffect(() => {
        movieDetails(id).then(par => {
          
            setFilm({
                title: par.title,
                path: par.poster_path,
                average: par.vote_average,
                overview: par.overview,
                genres: par.genres
            })
        })
        
    }, [id])
    if (!film) {
        return null
    }
    const { title, path, average, overview, genres } = film;
   
    return (
        <div>
            <Link to={location.state.from}>Back</Link>
            <div className={css.conteiner}>
                <img src={`https://image.tmdb.org/t/p/w300/${path}`} alt="" />
                <div className={css.film_description} >
                    <h1>{title}</h1>
                    <p>Use Score: {Math.round(average * 10)}%</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h4>Genres</h4>
                    <ul className={css.list_genres}>
                        {genres.map(({id, name} )=> {
                            return (
                                <li className={css.item_genres} key={id}><p>{name},</p></li>
                            )
                        })}
                    </ul>
                    
                </div>
            </div>
            <div>
                <p>Additional information</p>
                <ul>
                    <li><Link to='cast' state={{from: location.state.from}}>Cast</Link></li>
                    <li><Link to='reviews' state={{ from: location.state.from }}>Reviews</Link></li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
};

export default MovieDetails;