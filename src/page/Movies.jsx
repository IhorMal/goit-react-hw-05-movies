
import {LisMovies} from "components/lisMovies";
import { useState, useEffect } from 'react'
import { searchMovies } from '../Requests/Api'
import {Form} from "components/Form";



export const Movies = () => {
    const [name, setName] = useState('');
    const [nameFilms, setNameFilms] = useState([])
    useEffect(() => {
        if (name === '') {
           return 
        }
        searchMovies(name).then(pro => {
         
            setNameFilms(pro.results)
        
        }) 

    }, [name])
    console.log(nameFilms)
    if (nameFilms === undefined) {
        return
    }
    return (
        <div>

            <Form get={setName}></Form>

            {nameFilms.length !== 0 &&  <LisMovies movies={nameFilms}/>}

        </div>
    )
}

