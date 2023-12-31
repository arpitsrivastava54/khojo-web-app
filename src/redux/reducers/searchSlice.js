import { createSlice } from "@reduxjs/toolkit";

const responseSlice = createSlice({
    name:"response",
    initialState:[],
    reducers:{
        setResponse:(state,action)=>{
            return state = [action.payload]
        },
    }
})


export default responseSlice.reducer;
export const {setResponse} = responseSlice.actions;