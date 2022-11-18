import { useParams } from "react-router-dom";
import { useState, useEffect} from 'react'
import { movieCredits } from "../Requests/Api"

export const Cast = () => {
    const [cast, setCast] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        movieCredits(id).then(pro => {
            console.log(pro)
            setCast(pro.cast);
        });
        
    }, [id])

    if (!cast) {
        return null
    }

    return (
        <div>      
            {cast.length !== 0 ? (
                <ul>                 
                    {cast.map(({ profile_path, name, character, id }) => {                      
                        return (
                            <li key={id}>
                                {profile_path ? (<img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} />) :
                                    (<p>no Foro</p>)
                                }
                            
                                <p>Name: {name}</p>
                                <p>Character: {character}</p>
                            </li>
                        )
                    })}
                </ul>            
            ) : (<p>There is no information</p>)}         
        </div>    
    )
};