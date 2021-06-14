import React from 'react'
import classes from './NavBar.module.css'
const NavBar = () => {
    return (
        <nav className={classes.navBar}>
         <h1>Tai's Contact List</h1> 
         <ul>
          <li><a href="\">Home</a></li>   
          <li><a href="\newuser">New User</a></li>
        </ul> 
        </nav>
    )
}

export default NavBar
