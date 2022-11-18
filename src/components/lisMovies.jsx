import { Link} from 'react-router-dom'

export const LisMovies = ({ movies }) => {
    console.log(movies)
    return (
        <div>
            <ul>
                {movies.map(({ id, title }) => {
                    return (
                    <li key={id}>
                            <Link to={`${id}`}>${title}</Link>
                    </li>
                )
            })}
            </ul>
       
        </div>
    )
}