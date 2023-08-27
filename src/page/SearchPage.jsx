import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer"
import SearchResult from "../components/SearchResult";
import Image from "./Image"
import {Routes , Route} from "react-router-dom"
import SearchList from "../components/SearchList";
// import Video from "./Video"


const SearchPage = () => {
  return (
    <div>
        <Nav/>
        <SearchList/>
        <Routes>
            <Route path="/" element={<SearchResult/>}/>
            <Route path="imagesearch" element={<Image/>}/>
            {/* <Route path="videosearch" element={<Video/>}/> */}
        </Routes>
        <Footer/>
    </div>
  );
};

export default SearchPage;
