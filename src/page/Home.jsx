import {ApiPoporali} from '../Requests/Api'
import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation} from 'react-router-dom'



const Home = () => {
    const [state, setStayt] = useState(null);
    const location = useLocation();
    useEffect(() => {
        ApiPoporali().then(red => {
        setStayt(red.results)
    })
    }, [])
    if (!state) {
       return null
    }
    
    return (
        <div>
            <ul>
                 {state.map(e => {
                return (
                    <li key={e.id}>
                        <Link to={`movies/${e.id}`}  state={{ from: location }}>${e.title}</Link>
                    </li>
                )
            })}
            </ul>
        <Outlet/>
        </div>
    )
}


export default Home;