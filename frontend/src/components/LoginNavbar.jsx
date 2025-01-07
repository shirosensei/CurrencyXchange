import React from "react";
import LoginLayout from "./LoginLayout";

const LoginNavbar = () => {
  return (
    <header>
      <nav
        data-v-achi62s2
        className="open-ui-navbar"
        aria-label="Main Navigation"
      >
        <div data-v-achi62s2 className="open-ui-navbar-container">
          <div
            data-v-achi62s2
            className="open-ui-navbar-progress-bar"
            style={{ width: "0%" }}
          ></div>
          <div data-v-achi62s2 className="open-ui-navbar-left">
            <a
              data-v-0c09xa0
              href="/"
              className="open-ui-link"
              rel="nofollow noreferrer noopener"
              aria-label="cx Logo"
            >
              <span data-v-0c09xa0 className="open-ui-link-text">
                {/* <img data-v-0291chs src="" alt="cX Logo" srcset="" /> */}
                <h1>cX Logo</h1>
              </span>
            </a>
          </div>
          <div data-v-achi62s2 className="open-ui-navbar-center">
            <div className="information-model"></div>
            Sign In
          </div>
          <div data-v-achi62s2 className="open-ui-navbar-right"></div>
        </div>
      </nav>
    </header>
  );
};


export default LoginNavbar;

