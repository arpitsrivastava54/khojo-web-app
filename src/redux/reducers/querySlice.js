const { createSlice } = require("@reduxjs/toolkit");

const querySlice = createSlice({
    name:"query",
    initialState:"",
    reducers:{
        setQuery:(state,action)=>{
            return state = action.payload;
        }
    }
})

export const {setQuery} = querySlice.actions
export default querySlice.reducer;