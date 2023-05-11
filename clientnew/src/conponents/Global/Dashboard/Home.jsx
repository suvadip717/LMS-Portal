import React from "react";
import "./Home.css";
import Panel from "./Panel";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <>
      <div className="container">
        <div className="navbar-toggler"
          onClick={() => {
            document.getElementsByClassName("sidebar")[0].classList.toggle("active");
          }}>
        </div>

        <Sidebar/>
        <Panel/>
      </div>
    </>
  );
}

export default Home;
