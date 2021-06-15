import { createContext } from "react";
import useFetchHook from "../customHooks/useFetchHook";


export const UsersContext = createContext();



const UsersContextProvider = (props) => {
 //uses a custom hook which returns a state and a dispatch  
const {state,dispatch}= useFetchHook('http://localhost:8000/users');

    return (
        <UsersContext.Provider value={{state,dispatch}}>
{props.children}
        </UsersContext.Provider>
            
    
    )
}

export default UsersContextProvider
