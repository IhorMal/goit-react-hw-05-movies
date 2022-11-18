
import {LisMovies} from "components/lisMovies";
import { useState, useEffect, Suspense } from 'react';
import { searchMovies } from '../Requests/Api';
import { Outlet } from "react-router-dom";
import {Form} from "components/Form";



const Movies = () => {
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
    
    if (nameFilms === undefined) {
        return
    }
    return (
        <div>
            <Form get={setName}></Form>
            {nameFilms.length !== 0 && <LisMovies movies={nameFilms} />}
            <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
};

export default Movies;