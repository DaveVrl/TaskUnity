import { LOGIN , GET_USER_WORKSPACES, IS_LOGIN } from "./action-type";

const initialState = {

    userId: null,
    userWorkspaces: [],
    isLogin: true

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

      case IS_LOGIN:
        return {
          ...state,
          isLogin: action.payload
        }

      default:
        return {...state};
    }
  };
  
  export default reducer;