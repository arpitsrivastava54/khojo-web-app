import React from "react";
import { useSelector } from "react-redux";
import {ColorRing} from "react-loader-spinner"
import { Link } from "react-router-dom";

const Image = () => {
  const searching = useSelector((state) => state.searching);
  const data = useSelector(state => state.imageSearch)

  return (
    <div className="min-h-[63vh] px-5">

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
        <div className="img-container-main flex flex-wrap gap-[2%]">
          {data[0]?.map((d) => {
            return (
              <div
                className="img-container b-black w-[48%]  h-[150px] mb-3"
                key={d.id}
              >
                <Link target="_blank" to={d.source_url}><img src={d.thumbnail_url} alt={d.title}/></Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Image;
