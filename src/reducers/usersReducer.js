
const usersReducer = (state,action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {users:action.payload,isLoading:false,error:null}
        case 'FETCH_ERROR':
            return {users:[],isLoading:false,error:action.payload}
      case 'DELETE_USER':
          //show modal is set by passing a boolean value in the payload,items that do not match the id passed throught payload remain when filter is used
          return {users:state.users.filter(user=>user.id!==action.payload.id),isLoading:false,error:null,showModal:action.payload.showModal}
      case 'CANCEL_DELETE':
           return {...state,showModal:false}
      case 'DELETE_SUCCESS':
          return {users:state.users,...state,showModal:action.payload.showModal}
            default:
                return state;
    }   
}

export default usersReducer
