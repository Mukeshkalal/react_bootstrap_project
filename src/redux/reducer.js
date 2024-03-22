const initialState = {
  isLogin: false,
};

export const loginReducer = (state = initialState, action) => {
  if (action.type === "IS_LOGIN") {
    return {
      ...state,
      isLogin: true,
    };
  }
  return state;
};
