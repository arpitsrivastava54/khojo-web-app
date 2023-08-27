import { createSlice } from "@reduxjs/toolkit";

const isSearchingSlice = createSlice({
    name:"isSearching",
    initialState:false,
    reducers:{
        searching:(state,action)=>{
           return  state = true;
        },
        notSearching:(state,action)=>{
            return state = false;
        }
    }
})


export const {notSearching,searching} = isSearchingSlice.actions;
export default isSearchingSlice.reducer;