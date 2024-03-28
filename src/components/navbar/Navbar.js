import React from "react";
import css from "../navbar/navbar.css";

export default function Navbar() {
  return (
    <div>
      <div style={{ background: "white", width: "100%" }}>
        <div
          className="navbar-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <div>
            <a href="/">
              <img
                className="logo"
                src="https://assets-global.website-files.com/629898333cd8b9941adf699f/62baa0b7a5a9f2e43f60623b_worq-company-logo-1.svg"
                alt="logo"
                style={{ width: "300px" }}
              />
            </a>
          </div>
          <div>
            <button
              className="navbar-btn"
              style={{
                padding: "9px 20px",
                borderRadius: "6px",
                border: "0",
                background: "#016271",
                cursor: "pointer",
              }}
            >
              <p
                style={{ fontSize: "12px", fontWeight: "bold", color: "white" }}
              >
                WORKCOMPANY'DA SATICI OLUN
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
