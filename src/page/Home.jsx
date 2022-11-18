import {ApiPoporali} from '../Requests/Api'
import { useEffect, useState } from 'react'
import { Link, Outlet} from 'react-router-dom'



export const Home = () => {
    const [state, setStayt] = useState(null);
    useEffect(() => {
        ApiPoporali().then(red => {
        console.log(red)
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
                        <Link to={`movies/${e.id}`}>${e.title}</Link>
                    </li>
                )
            })}
            </ul>
        <Outlet/>
        </div>
    )
}

