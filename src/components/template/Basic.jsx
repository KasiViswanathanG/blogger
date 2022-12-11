import React from "react";
import NavBar from "../NavBar";

function Basic({ children }) {
  return (
    <div style={{ background: "#e5e5e5" }}>
      <NavBar />
      {children}
    </div>
  );
}

export default Basic;
