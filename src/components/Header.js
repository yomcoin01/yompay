import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F0E5F7",
      }}
    >
      <img
        src="12.jpg" // Replace with the actual logo path
        alt="Yomcoin Logo"
        style={{ width: "80px", marginBottom: "1rem" }}
      />
    </div>
  );
};

export default Header;
