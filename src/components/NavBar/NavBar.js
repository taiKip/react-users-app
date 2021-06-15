import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'
const NavBar = () => {
    return (

        <nav className={classes.navBar}>
         <h1>Tai's Contact List</h1> 
         <ul>
          <li><Link to="/">Home</Link></li>   
          <li><Link to="/newuser">New User</Link></li>
        </ul> 
        </nav>
    )
}

export default NavBar
