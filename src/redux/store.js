import { configureStore } from "@reduxjs/toolkit";
import responseReducer from "../redux/reducers/searchSlice"
import isSearchingReducer from "../redux/reducers/isSearchingSlice"
import imageSearchReducer from "../redux/reducers/imageSearchSlice";
import queryReducer from "../redux/reducers/querySlice";
import videoSearchReducer from "../redux/reducers/videoSearchSlice"
const store = configureStore({
    reducer:{
       response:responseReducer,
       searching:isSearchingReducer,
       imageSearch:imageSearchReducer,
       query:queryReducer,
       videoSearch:videoSearchReducer
    }
});

export default store;