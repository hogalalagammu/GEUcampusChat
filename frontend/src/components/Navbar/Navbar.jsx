import React, { useState } from "react";
import style from "./navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={style.navbarcontainer}>
        {/* Left side */}
        <div className={style.navbarleft}>
          <a href="/">
            <img className={style.logo} src="/logo.png" alt="Campus Chat Logo" />
          </a>
        </div>

        {/* Middle text (hidden on mobile) */}
        <div className={style.tiltedtext}>Talk to strangers☠️</div>

        {/* Right side (desktop links) */}
        <div className={style.navbarright}>
          <a href="/chat">Community Chat</a>
          <a href="/login">Login</a>
        </div>

        {/* Hamburger (mobile only) */}
        <div className={style.hamburger} onClick={() => setMenuOpen(true)}>
          <MenuIcon style={{ color: "white", fontSize: "2rem" }} />
        </div>

        {/* Mobile slide menu */}
        <div className={`${style.mobilemenu} ${menuOpen ? style.open : ""}`}>
          <div className={style.closebtn} onClick={() => setMenuOpen(false)}>
            <CloseIcon style={{ color: "white", fontSize: "2rem" }} />
          </div>
          <a href="/chat" onClick={() => setMenuOpen(false)}>Community Chat</a>
          <a href="/login" onClick={() => setMenuOpen(false)}>Login</a>
        </div>
      </div>

      {/* Overlay (background dim when menu open) */}
      {menuOpen && (
        <div className={style.overlay} onClick={() => setMenuOpen(false)}></div>
      )}
    </>
  );
}
