import css from './App.module.css'
import styled from "styled-components";
import { NavLink, Outlet } from 'react-router-dom'
import { Suspense } from "react";

const StyledLink = styled(NavLink)`
  color: black;
   padding-left: 20px;
   text-decoration: none;
  &.active {
    color: red;
  }
`;

export const SharedLayout = () => {
    return (
        <div>
            
            <header>
            <nav className={css.nav}>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/movies'>Movies</StyledLink>
            </nav>
            
            </header>
            <Suspense >
                <Outlet/>
            </Suspense>
        
        </div>
    
    )
};
