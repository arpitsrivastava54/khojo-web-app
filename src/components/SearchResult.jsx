import React from "react";
import SearchList from "./SearchList";
import { useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";

const SearchResult = () => {
  const data = useSelector((state) => state.response);
  const searching = useSelector(state => state.searching)

  return (
    <div className="search-result p-5 min-h-[85vh] lg:px-[35px]">
      {searching ? (
        <div className="flex justify-center flex-col items-center mt-10">
         <span className="text-3xl"> Loading....</span>
          <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          
        />
        </div>
      ) : (
        <>
          <SearchList />
          {data[0]?.map((d, index) => {
            return (
              <ul className="mt-5" key={index}>
                <li>
                  <a
                    href={d.url}
                    className="text-xl text-[#ffb94c] hover:decoration-2 hover:decoration-stone-700o"
                  >
                    {d.title}
                    <br />
                    <span className="text-base text-slate-400">{d.domain}</span>
                  </a>
                </li>
                <li className="mt-2">{d.snippet}</li>
              </ul>
            );
          })}
        </>
      )}
    </div>
  );
};

export default SearchResult;
