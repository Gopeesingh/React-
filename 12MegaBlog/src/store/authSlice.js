import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers : {
        login : (state, action) => { // action se milta hai payload aur state se jo bhi value update karni hai
        state.status = true;
        state.userData = action.payload.userData;
        },
        logout : (state, action) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
