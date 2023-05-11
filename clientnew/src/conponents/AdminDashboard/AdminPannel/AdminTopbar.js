import React from "react";
import "./admin.css";

const AdminTopbar = () => {
  return (
    <>
      <div className="w-25 sidebar-full">
        <div className="internal-container">
          <div className="nav-head">
            <div className="nav-head-item">
              <div className="admin-pic">
                <div className="cse-logo"></div>
              </div>
              <div className="admin-title">ADMIN</div>
            </div>
          </div>
          <hr />
          <div className="nav-item">
            {" "}
            <div className="nav-link">
              <a href="/">Notes Upload</a>{" "}
            </div>
          </div>
          <div className="nav-item">
            {" "}
            <div className="nav-link">
              <a href="/">Questions Upload</a>{" "}
            </div>
          </div>
          <div className="nav-item">
            {" "}
            <div className="nav-link">
              <a href="/">Notice</a>{" "}
            </div>
          </div>
          <div className="nav-item">
            {" "}
            <div className="nav-link">
              <a href="/">Users</a>{" "}
            </div>
          </div>
          <div className="nav-item">
            {" "}
            <div className="nav-link">
              <a href="/">Logout</a>{" "}
            </div>
          </div>
        </div>
        {/* <div className="nav-item">Hello</div>
        <div className="nav-item">Hello</div>
        <div className="nav-item">Hello</div> */}
      </div>
    </>
  );
};

export default AdminTopbar;
