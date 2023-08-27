import { createSlice } from "@reduxjs/toolkit";

const videoSearchSlice = createSlice({
    name:"videoSearch",
    initialState:[],
    reducers:{
        setVideo:(state,action)=>{
            return state = [action.payload]
        }
    }
})

export const {setVideo} = videoSearchSlice.actions;
export default videoSearchSlice.reducer;