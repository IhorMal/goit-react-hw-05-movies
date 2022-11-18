import {  Outlet, Link} from 'react-router-dom'
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
    console.log('1')
    return (
        <div>
            <header>
                <nav className={css.nav}>
                    <Link to='/' >Home</Link>
                    <Link to='/movies'>Movies</Link>
                </nav>
            </header>
            <Outlet />
        </div>
    );
};
