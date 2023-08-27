import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
    name:"imageSearch",
    initialState:[],
    reducers:{
        setImage:(state,action)=>{
            return state = [action.payload];
        }
    }
})

export const {setImage} = imageSlice.actions
export default imageSlice.reducer;