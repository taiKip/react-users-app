
const usersReducer = (state,action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {users:action.payload,isLoading:false,error:null}
        case 'FETCH_ERROR':
            return {users:[],isLoading:false,error:action.payload}
            default:
                return state;
    }   
}

export default usersReducer
