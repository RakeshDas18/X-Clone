import {createSlice} from "@reduxjs/toolkit";
const tweetSlice = createSlice({
    name:"tweet",
    initialState:{
        tweets:null,
    },
    reducers:{
        getAllTweets:(state,action)=>{
            state.tweets = action.payload;
        }
    }
});
export const { getAllTweets } = tweetSlice.actions;
export default tweetSlice.reducer;