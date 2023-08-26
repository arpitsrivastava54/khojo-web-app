import { configureStore } from "@reduxjs/toolkit";
import responseReducer from "../redux/searchSlice"
import isSearchingReducer from "../redux/isSearchingSlice"


const store = configureStore({
    reducer:{
       response:responseReducer,
       searching:isSearchingReducer
    }
});

export default store;