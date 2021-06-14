import React from 'react'
import classes from './User.module.css'
const User = (props) => {
    const icon = (props.name).charAt(0)
    const mail='mailto:' + props.email
    return (
        <div className={classes.user}>
            <div className={classes.icon}>
                {icon}
            </div>
        <header>
<h2>{props.name}</h2>
<h3>tai</h3>
<a href={mail}>email</a>
            </header>
            <button>MORE DETAILS</button>    
        </div>
    )
}

export default User
