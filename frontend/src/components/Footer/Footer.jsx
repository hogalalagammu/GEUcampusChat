import React from 'react';
import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <p>© 2025 Campus Chat. All rights reserved.</p>
        <div className={style.socials}>
          <a href="#"><span>🐦</span></a>
          <a href="#"><span>📘</span></a>
          <a href="#"><span>📸</span></a>
        </div>
      </div>
    </footer>
  )
}
