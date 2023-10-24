import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import VideoSection from "./components/VideoSection/VideoSection";

import "./App.css";

function App() {
  return (
    <>
      <div className="">
        <NavBar />
        <Main/>
        <VideoSection/>
      </div>
    </>
  );
}

export default App;
