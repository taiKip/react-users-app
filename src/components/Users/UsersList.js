import React, { useContext,  useState } from "react";
import { UsersContext } from "../../contexts/UsersContext";
import User from "./User";
import classes from "./UsersList.module.css";
import Modal from "../../UI/Modal";
import { useHistory } from "react-router-dom";
const UsersList = () => {
  //using array destructuring to get the state value prop from the UsersContext i.e fetched data
  const { state, dispatch } = useContext(UsersContext);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [userDelete, setUser] = useState(null);
const history= useHistory();
  const handleDelete = (id) => {
    //persist the data of the user to be deleted in the state
    setDeleteUserId(id);
    const user =
      state.users &&
      state.users
        .filter((user) => user.id === id)
        .reduce((userObj, userItem) => userObj + userItem);
    setUser(user);
  };
const  handleCancleDelete = ()=>{
  dispatch({type:'CANCEL_DELETE'})
}
const handlePermanentDelete=()=>{
fetch('http://localhost:8000/users/'+deleteUserId,{
  method:'DELETE'
}).then(()=>{
dispatch({type:'DELETE_SUCCESS',payload:{showModal:false}})
history.push('/')
})
}
  return (
    <section className={classes.usersList}>
      {state.showModal && (
        <Modal onClick={handleCancleDelete}>
          <div className={classes["delete-prompt"]}>
            <header>
              <h1>Delete Permanently</h1>
              <p>You will loose the contact permanently: </p>
              <span>
                <h3>name: {userDelete.name}</h3>
                <h4>email : {userDelete.email}</h4>
                <h4>phone : {userDelete.phone}</h4>
                <h4>city : {userDelete.city}</h4>
              </span>
            </header>
            <div className={classes.actions}>
              <button className={classes.cancel} onClick={handleCancleDelete}>Cancel</button>
              <button className={classes.delete} onClick={handlePermanentDelete}>Confirm</button>
            </div>
          </div>
        </Modal>
      )}
      {state.error && (
        <p style={{ margin: "0 auto", color: "red" }}>{state.error}</p>
      )}
      {state.isLoading && <div style={{ margin: "0 auto" }}>Loading...</div>}
      {state.users &&
        state.users.map((user) => (
          <User
            key={user.id}
            id={user.id}
            email={user.email}
            name={user.name}
            confirmDelete={handleDelete}
          />
        ))}
    </section>
  );
};

export default UsersList;
