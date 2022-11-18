import { Suspense } from "react";
import { Outlet, Link } from 'react-router-dom'
import css from './App.module.css'
// import styled from "styled-components";



// const StyledLink = styled(NavLink)`
//   color: black;
//    padding-left: 20px;
//    text-decoration: none;
//   &.active {
//     color: red;
//   }
// `;

export const SharedLayout = () => {

    return (
        <>
            <header>
                <nav className={css.nav}>
                    <Link to='/goit-react-hw-05-movies' >Home</Link>
                    <Link to='/goit-react-hw-05-movies/movies'>Movies</Link>
                </nav>
            </header>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
};
