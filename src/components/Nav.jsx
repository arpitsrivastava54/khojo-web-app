import React, { useState } from "react";
import {setResponse} from "../redux/searchSlice";
import { useDispatch } from "react-redux";
import {notSearching,searching} from "../redux/isSearchingSlice"



const Nav = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();



  const searchHandler = async () => {

    if (search === "" || search[0] === " ") {
      alert("search box is empty or remove space from start");
    } else {
      let query = search;
      query = query.replace(" ","%20");
      const url =
        `https://real-time-web-search.p.rapidapi.com/search?q=${query}&limit=15`;
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
            "54bab81812msh8843a43609ceaeap12368fjsnb6416b99c11d",
            "X-RapidAPI-Host": "real-time-web-search.p.rapidapi.com",
          },
        };
        
        try {
        dispatch(searching());
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("response ==>",result)
        
        dispatch(setResponse(result.data));
        dispatch(notSearching());
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="Nav h-[15vh] p-5 flex items-center">
      <div className="nav-wrapper w-[100%] flex justify-between items-center h-[100%]">
        <div className="w-[20%] text-3xl font-semibold lg:text-5xl flex justify-center items-center">
          <span className="text-red-600">K</span>
          <span className="text-green-600">h</span>
          <span className="text-blue-600">o</span>
          <span className="text-yellow-400">j</span>
          <span className="text-red-600">o</span>
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
          <button onClick={searchHandler} className="btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
