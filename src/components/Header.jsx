import React from "react";

function Header() {
  return (
    <div>
      <header
        style={{
          padding: "10px",
          fontSize: "25px",
          fontWeight: "bold",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        My Todo List
      </header>
    </div>
  );
}

export default Header;
