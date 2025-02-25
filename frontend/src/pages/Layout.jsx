import React from "react";
import Navbar from "../components/Navbar";
import Slidebar from "../components/Slidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <React.Fragment>
        <Navbar />
        <div className="columns mt-6" style={{ minHeight: "100vh" }}>
          <div className="column is-2">
            <Slidebar />
          </div>
          <div className="column has-background-light">
            <main>{children}</main>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Layout;
