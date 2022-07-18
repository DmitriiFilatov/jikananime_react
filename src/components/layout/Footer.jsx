import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Footer() {
  return (
    <section className="footer-container">
      <div className="footer-text">
        <p className="footer-mentions">
          The app is made utilizing Jikan, an unofficial REST API of
          MyAnimeList.
        </p>
        <p className="footer-misc-text">
          Created with <FavoriteIcon sx={{ color: "#ba524c" }} /> by Dmitrii.
        </p>
      </div>
    </section>
  );
}

export default Footer;
