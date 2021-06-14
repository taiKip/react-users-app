import { createContext } from "react";
import useFetchHook from "../customHooks/useFetchHook";


export const UsersContext = createContext();



const UsersContextProvider = (props) => {
   
const {state}= useFetchHook('http://localhost:8000/users');
    return (
        <UsersContext.Provider value={{state}}>
{props.children}
        </UsersContext.Provider>
            
    
    )
}

export default UsersContextProvider
