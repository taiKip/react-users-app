import React, { useReducer } from "react";

import formReducer from "../../reducers/formReducer";
import classes from "./NewUserForm.module.css";

const initialState = {data:{
  name: "",
  email: "",
  gender: "female",
  city: "",
  phoneNum: "",
},isUploading:false,error:null};
const NewUserForm = () => {
  const [state, dispatch] = useReducer(formReducer, {}, () => initialState);

  const handleSubmit=(event)=>{
event.preventDefault();
dispatch({type:"uploading"})
fetch('http://localhost:8000/users', {
    method: 'POST',
    body: JSON.stringify(state.data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }
 
  )
    .then((response) =>{
        if(!response.ok){  
           
throw Error ('An error occured .Please try again')
        }
      
        dispatch({type:'upload-success',payload:initialState})
return response.json()
    } ).catch(error=>{
       dispatch({type:'upload-error',payload:error.message})
   
    })
   

  }
  return (
    <form onSubmit={handleSubmit}>
      {state.error&&<p style={{color:'red'}}>{state.error}</p>}
      {state.isUploading&&<p>Uploading...</p>}
      <div className={classes.inputForm}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          required
          value={state.data.name}
          onChange={(event) =>
            dispatch({ type: "add-name", payload: event.target.value })
          }
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          required
          value={state.data.email}
          onChange={(event) =>
            dispatch({ type: "add-email", payload: event.target.value })
          }
        />
        <label htmlFor="gender">gender</label>
        <select
          id="gender"
          className={classes.gender}
          value={state.data.gender}
          onChange={(event) =>
            dispatch({ type: "add-gender", payload: event.target.value })
          }
        >
          <option>female</option>
          <option>male</option>
        </select>
        <label htmlFor="city">city</label>
        <input
          type="text"
          id="city"
          required
          value={state.data.city}
          onChange={(event) =>
            dispatch({ type: "add-city", payload: event.target.value })
          }
        />
        <label htmlFor="name">phone</label>
        <input
          type="text"
          id="number"
          required
          value={state.data.phoneNum}
          onChange={(event) =>
            dispatch({ type: "add-phone", payload: event.target.value })
          }
        />
      </div>
      <button type="submit" className={classes.submitButton}>
        Add user
      </button>
    </form>
  );
};

export default NewUserForm;
