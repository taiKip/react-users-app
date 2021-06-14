import { useEffect, useReducer } from "react";
import usersReducer from "../reducers/usersReducer";
const initialState = {
  users: [],
  isLoading: true,
  error: null,
};

const useFetchHook = (url) => {
  const [state, dispatch] = useReducer(usersReducer, [], () => initialState);

  useEffect(() => {
    fetch(url)
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
  }, []);
  return { state };
};

export default useFetchHook;
