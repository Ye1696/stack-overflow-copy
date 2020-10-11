import React from "react";
import { FooterNav } from "./FooterNav";

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <a href="https://stackoverflow.com/">
            <svg
              aria-hidden="true"
              class="native svg-icon iconLogoGlyphMd"
              width="32"
              height="37"
              viewBox="0 0 32 37"
            >
              <path d="M26 33v-9h4v13H0V24h4v9h22z" fill="#BCBBBB"></path>
              <path
                d="M21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0zM26 18.4L13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm14 10.79l.68-2.95-16.1-3.35L7 23l16.1 2.99zM23 30H7v-3h16v3z"
                fill="#F48024"
              ></path>
            </svg>
          </a>
        </div>
        <FooterNav />
        <div className="footer-copyright">
          <ul>
            <li>
              <a href="https://stackoverflow.blog/?blb=1">Blog</a>
            </li>
            <li>
              <a href="https://www.facebook.com/officialstackoverflow/">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/stackoverflow">Twitter</a>
            </li>
            <li>
              <a href="https://linkedin.com/company/stack-overflow">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.instagram.com/thestackoverflow">Instagram</a>
            </li>
          </ul>
          <p>
            site design / logo © 2020 Stack Exchange Inc; user contributions
            licensed under{" "}
            <a href="https://stackoverflow.com/help/licensing">cc by-sa</a>. rev
            2020.10.9.37784
          </p>
        </div>
      </div>
    </footer>
  );
}
