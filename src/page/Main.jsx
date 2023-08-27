import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {setQuery} from "../redux/reducers/querySlice"
import {searching,notSearching} from "../redux/reducers/isSearchingSlice"
import {fetchSearchData,fetchSearchImage} from "../apiCall"
import {setResponse} from "../redux/reducers/searchSlice"
import {setImage} from "../redux/reducers/imageSearchSlice"
import { useNavigate } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const [search,setSearch] = useState("");
  const navigate = useNavigate();

  const searchHandler = async () => {
    if (search === "" || search[0] === " ") {
      alert("search box is empty or remove space from start");
    } else {
      let query = search;
      dispatch(setQuery(query));
      navigate("/searchpage");
      query = query.replace(" ", "%20");

      dispatch(searching());
      const searchData = await fetchSearchData(query);
      dispatch(setResponse(searchData));

      //-------- image search api call
      
      const imageData = await fetchSearchImage(query);
      dispatch(setImage(imageData));
      dispatch(notSearching());      
    }
  };



  return (
    <div className="h-[100vh] w-[100vw] ">
      <div className="container flex justify-center items-center h-full flex-col gap-5">
        <div className="logo text-8xl font-bold">
          <span className="text-red-600">K</span>
          <span className="text-green-600">h</span>
          <span className="text-blue-600">o</span>
          <span className="text-yellow-400">j</span>
          <span className="text-red-600">o</span>
        </div>
        <form className="mt-5 flex items-center justify-center flex-col w-[100%] gap-5">
          <input
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
            type="search"
            placeholder="search here"
            className="focus:outline-none text-black w-[90%] p-3 rounded-[25px]"
          />
          <button className="btn w-[250px]" onClick={searchHandler}>Search</button>
        </form>
      </div>
    </div>
  );
};

export default Main;
