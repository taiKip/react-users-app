import { useEffect, useReducer } from "react";
import usersReducer from "../reducers/usersReducer";
const initialState = {
  users: [],
  isLoading: true,
  error: null,
  showModal:false
};
//takes in a url as an argument and returns a state and a dispatch.Innitial state is passed in
const useFetchHook = (url) => {
  const [state, dispatch] = useReducer(usersReducer, [], () => initialState);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url,{signal:abortCont.signal})
      .then((res) => {
        if (!res.ok) {
          throw Error("sorry ,could not fetch data for that resource :(");
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      });
      return ()=>abortCont.abort()
  }, [url]);
  return { state ,dispatch};
};

export default useFetchHook;
