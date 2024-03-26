import { LOGIN , GET_USER_WORKSPACES } from "./action-type";

const initialState = {

    userId: null,
    userWorkspaces: [],
    isLogin: false

  };
  
  const reducer = (state = initialState, action) => {

    switch (action.type) {

      case LOGIN:
        return {
          ...state,
          userId: action.payload.id,
          isLogin: true
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