
import {LisMovies} from "components/lisMovies";
import { useState, useEffect, Suspense } from 'react';
import { searchMovies } from '../Requests/Api';
import { Outlet, useSearchParams} from "react-router-dom";
import {Form} from "components/Form";



const Movies = () => {
    const [nameFilms, setNameFilms] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    function changeFiltet(value) {
        setSearchParams(value !== '' ? { query: value } : {});
    }

    const names = searchParams.get("query") ?? "";
   
    useEffect(() => {
        if (names === '') {
            return
        }
        searchMovies(names).then(pro => {
            
            setNameFilms(pro.results)
           
        })

    }, [names])
    
    if (nameFilms === undefined) {
        return
    }
    
    return (
        <div>
            <Form  onChange={changeFiltet}></Form>
            {nameFilms.length !== 0 && <LisMovies movies={nameFilms} />}
            <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
};

export default Movies;