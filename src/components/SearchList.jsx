import React from "react";
import { Link } from "react-router-dom";

const SearchList = () => {
  return (
    <div className="search-list ">
      <ul className="flex justify-evenly mb-10">
        <Link to="/searchpage">
          <li className="btn cursor-pointer">Web Search</li>
        </Link>
        {/* <Link to="videosearch">
          <li className="btn cursor-pointer">Videos</li>
        </Link> */}
        <Link to="imagesearch">
          <li className="btn cursor-pointer">
            Images
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SearchList;
