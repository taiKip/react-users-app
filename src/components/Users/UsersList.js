import React, { useContext } from "react";
import { UsersContext } from "../../contexts/UsersContext";
import User from "./User";
import classes from "./UsersList.module.css";

const UsersList = () => {
  const {state} = useContext(UsersContext);

  return (

    <section className={classes.usersList}>
      {state.error &&<p style={{margin:'0 auto',color:'red'}}>{state.error }</p>}
      {state.isLoading&&<div style={{margin:'0 auto'}}>Loading...</div>}
      {state.users&&  state.users.map((user) => (
          <User key={user.id} email={user.email} name={user.name} />
        ))}
    </section>
  );
};

export default UsersList;
