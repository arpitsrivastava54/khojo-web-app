import React from "react";
import { useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";
import { Link } from "react-router-dom";

const SearchResult = () => {
  const data = useSelector((state) => state.response);
  const searching = useSelector(state => state.searching)

  return (
    <div className="search-result px-5 pb-5 min-h-[63vh] lg:px-[35px]">
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
          {data[0]?.map((d, index) => {
            return (
              <ul className="mt-5" key={index}>
                <li>
                  <Link
                    to={d.url}
                    target="_blank"
                    className="text-xl text-[#ffb94c] hover:decoration-2 hover:decoration-stone-700o"
                  >
                    {d.title}
                    <br />
                    <span className="text-base text-slate-400">{d.domain}</span>
                  </Link>
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
