

const formReducer = (state,action) => {
    switch (action.type) {
        case "add-name":
          return { ...state,data:{...state.data, name: action.payload} };
        case "add-email":
          return { ...state, data:{...state.data,email: action.payload} };
        case "add-gender":
          return { ...state, data:{...state.data,gender: action.payload }};
        case "add-city":
          return { ...state, data:{...state.data,city: action.payload} };
          case "add-phone":
            return { ...state, data:{...state.data,phoneNum: action.payload} };

        case 'upload-success':
            return action.payload
        case 'uploading':
          return {...state,isUploading:true}
        case 'upload-error':
          return{...state,error:action.payload,isUploading:false}
        default:
          return state;
      }
}

export default formReducer
