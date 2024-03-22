import { GET_USER_WORKSPACES } from "./action-type";

const initialState = {

    userWorkspaces: []

  };
  
  const reducer = (state = initialState, action) => {

    switch (action.type) {

      case GET_USER_WORKSPACES:
        return{
          ...state,
          userWorkspaces: action.payload
        }

      default:
        return {...state};
    }
  };
  
  export default reducer;