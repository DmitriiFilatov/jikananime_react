import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";

function Navbar() {
  return (
    <>
      <header>
        <nav className="nav">
          <h2 className="nav-title">Anime 時間</h2>
          <ul className="links">
            <li className="link-container">
              <a
                href="https://cranky-nobel-e11414.netlify.app/"
                className="nav-link nav-link-text"
              >
                My Portfolio
              </a>
            </li>
            <li className="link-container">
              <a
                href="https://github.com/DmitriiFilatov/JikanAPI_Project"
                className="nav-link"
              >
                <GitHubIcon
                  sx={{ fontSize: 30, display: "flex", alignItems: "center" }}
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
