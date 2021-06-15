import React, { useContext } from "react";
import classes from "./User.module.css";
import { UsersContext } from "../../contexts/UsersContext";

const User = (props) => {
  const { dispatch } = useContext(UsersContext);
  const icon = props.name ? props.name.charAt(0) : "";
  const mail = "mailto:" + props.email;
  const handleDelete = () => {
      //prompt the modal(for user to confirm delete)
    dispatch({
      type: "DELETE_USER",
      payload: { id: props.id, showModal: true },
    });
    //retrieve the id of the deleted item so as to present it in modal for user to confirm permanent deletion from database.
    props.confirmDelete(props.id);
  };
  return (
    <div className={classes.user}>
      <div className={classes.icon}>{icon}</div>
      <header>
        <h2>{props.name}</h2>

        <a href={mail}>email</a>
      </header>

      <button className={classes.details}>MORE DETAILS</button>
      <button className={classes.delete} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default User;
