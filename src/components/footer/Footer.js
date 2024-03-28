import React from "react";
import css from "../footer/footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <div style={{ background: "#1f2734", width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <div>
              <p
                style={{
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "normal",
                  margin: "0",
                }}
              >
                ©2024, WorkCompany. Her hakkı saklıdır.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="footer-logo">
                <a href="/">
                  {" "}
                  <img
                    src="https://assets-global.website-files.com/629898333cd8b9941adf699f/62baa0b7a5a9f2e43f60623b_worq-company-logo-1.svg"
                    alt="logo"
                    style={{ width: "200px" }}
                  />
                </a>
              </div>
              <div style={{ marginLeft: "8px" }}>
                <p
                  style={{
                    color: "#ccced1",
                    fontSize: "12px",
                    fontWeight: "normal",
                    marginBottom: "4px",
                    marginTop: "0",
                  }}
                >
                  Satıcı Destek Hattı
                </p>
                <p
                  style={{
                    color: "#939393",
                    fontSize: "16px",
                    fontWeight: "normal",
                    margin: "0",
                    fontWeight: "500",
                  }}
                >
                  0850 360 9677
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
