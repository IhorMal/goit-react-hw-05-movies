import { Link, useLocation} from 'react-router-dom'

export const LisMovies = ({ movies }) => {
    const location = useLocation();
    return (
        <div>
            <ul>
                {movies.map(({ id, title }) => {
                    return (
                    <li key={id}>
                            <Link to={`${id}`} state={{ from: location }} >${title}</Link>
                    </li>
                )
            })}
            </ul>
       
        </div>
    )
}