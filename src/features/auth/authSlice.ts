import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  apiSuccess: false,
  resetSucess: false,
  access_token: "",
  login_success: false,
  errors: {
    login: {},
    forgotPassword: {},
    resetPassword: {},
    updatePassword: {},
  },
};

const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isLoading: (state, action) => {
      state.isLoading = true;
    },
    loginSuccessful: (state, action) => {
      state.isLoading = false;
      if (action.payload && typeof window !== "undefined") {
        const data = action?.payload?.data?.data?.data;
        localStorage.setItem("auth_user", JSON.stringify(data));
        localStorage.setItem("user-token", data?.token?.token);
        state.user = data;
        
      }
    },
  },
});
