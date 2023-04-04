import React from 'react';
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className='navcontainer' > 
        <div className='logo' >
          ET's Space
        </div>
        <div >
          <ul className='list'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/marsclub">MarsClub</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Navbar



