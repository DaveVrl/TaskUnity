import { LOGIN , GET_USER_WORKSPACES } from "./action-type";

const initialState = {

    userId: null,
    userWorkspaces: []

  };
  
  const reducer = (state = initialState, action) => {

    switch (action.type) {

      case LOGIN:
        return {
          ...state,
          userId: action.payload.id
        }

      case GET_USER_WORKSPACES:
        return {
          ...state,
          userWorkspaces: action.payload
        }

      default:
        return {...state};
    }
  };
  
  export default reducer;