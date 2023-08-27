import React from "react";
import { Routes ,Route} from "react-router-dom";
import Main from "./page/Main";
import SearchPage from "./page/SearchPage";


function App() {
 
  return (
    <div className="App bg-[#080834] text-white">
       <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/searchpage/*" element={<SearchPage/>}/>
      </Routes> 
    </div>
  );
}

export default App;
