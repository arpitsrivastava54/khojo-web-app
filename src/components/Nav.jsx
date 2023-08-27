import React, { useState } from "react";
import { fetchSearchData, fetchSearchImage } from "../apiCall";
import { useDispatch, useSelector } from "react-redux";
import { setResponse } from "../redux/reducers/searchSlice";
import { notSearching, searching } from "../redux/reducers/isSearchingSlice";
import { Link } from "react-router-dom";
import { setQuery } from "../redux/reducers/querySlice";
import { setImage } from "../redux/reducers/imageSearchSlice";

const Nav = () => {
  const q = useSelector(state => state.query)
  const [search, setSearch] = useState("" || q);
  const dispatch = useDispatch();

  const searchHandler = async () => {
    if (search === "" || search[0] === " ") {
      alert("search box is empty or remove space from start");
    } else {
      let query = search;
      query = query.replace(" ", "%20");

      dispatch(setQuery(query));
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
    <div className="Nav h-[15vh] p-5 flex items-center">
      <div className="nav-wrapper w-[100%] flex justify-between items-center h-[100%] gap-5">
        <div className="w-[20%] text-3xl font-bold lg:text-5xl flex justify-center items-center">
          <Link to="/">
            <span className="text-red-600">K</span>
            <span className="text-green-600">h</span>
            <span className="text-blue-600">o</span>
            <span className="text-yellow-400">j</span>
            <span className="text-red-600">o</span>
          </Link>
        </div>
        <div className="serach-bar w-[80%] flex gap-[5px] items-center lg:gap-[15px]">
          <input
            className="b-black w-[100%] text-black focus:outline-none rounded-[15px] px-[15px] py-[5px]"
            type="search"
            placeholder="search here"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button onClick={searchHandler} className="btn">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
