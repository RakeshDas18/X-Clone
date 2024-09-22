import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        otherUsers:null
    },
    reducers:{
        getUser:(state,action) => {
            state.user = action.payload;
        },
        getOtherUser:(state, action) => {
            state.otherUsers = action.payload;
        }
    }
})

export const {getUser, getOtherUser} = userSlice.actions;
export  default userSlice.reducer;