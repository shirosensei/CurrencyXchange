import React, { useState } from "react";
import PropTypes from "prop-types";
// import { useOutletContext } from 'react-router-dom';

const Login = ({ toggleForm }) => {
  // const  = useOutletContext(); // Get `toggleForm` from the context

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="flex flex-col justify-between h-full open-ui-card open-ui-card-has-content open-ui-card--sheet open-ui-card--centered open-ui-card--xs">
      <div className="flex-1 overflow-y-auto px-6 pt-6 open-ui-card-content ">
        <div className="mb-6 open-ui-card-content-block">
          <form onSubmit={handleSubmit}>
            <div className="mb-6 open-ui-input">
              <label
                htmlFor="email-input"
                id="email"
                className="text-base font-medium mb-1 tracking-tight text-text-secondary open-ui-input-label"
              >
                Email
              </label>
              <div className="relative mt-1 open-ui-input-wrapper">
                <input
                  type="email"
                  placeholder=" "
                  className="relative block h-12 w-full px-3 border rounded-md outline outline-2 outline-transparent border-disabled text-secondary text-base open-ui-input-input"
                  id="email-input"
                  aria-labelledby="email"
                  aria-describedby="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div></div>
            </div>
            <div data-v-39203cz className="open-ui-input open-ui--with-right-icon">
              <label htmlFor="password-input" 
              className="text-base font-medium mb-1 tracking-tight text-text-secondary open-ui-input-label"
              >
                Password
              </label>
              <div data-v-39203cz className="relative mt-1 open-ui-input-wrapper">
                <input
                  type="password"
                  className="relative block h-12 w-full px-3 border rounded-md outline outline-2 outline-transparent border-disabled text-secondary text-base open-ui-input-input"
                  placeholder="Enter your password"
                  aria-label="password"
                  aria-labelledby=""
                  aria-describedby=""
                  id="password-input"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="open-ui-right-icon">
                  <button
                    type="button"
                    aria-label="Reveal password"
                    className="open-ui-button open-ui-button--icon"
                  >
                    <span className="ripple md-ripple block open-ui-button-inner">
                      <svg
                        className="oen-ui-icon text-2xl align-baseline inline-block"
                        viewBox="0 0 32 32"
                        width="1em"
                        height="1em"
                      >
                        <path
                          fill="currentColor"
                          d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6m0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <div></div>
            </div>
            <p className="text-center text-sm font-small mb-6 medium forgotText">
              <button type="button" className="open-ui-link forgotText">
                <span className="open-ui-link-text">Forgot password?</span>
              </button>
            </p>
            <div></div>
            <div></div>
            <div className="fixed left-0 bottom-0 w-full flex flex-row-reverse items-baseline justify-between footer">
              <button
                className="flex items-center justify-center text-base p-3 rounded bg-secondary open-ui-button w-full open-ui-button--primary"
                type="submit"
                disabled="disabled"
              >
                <span className="px-8 ripple md-ripple md-disabled block open-ui-button-inner">
                  Continue
                </span>
              </button>
              <button
                disabled=""
                type="button"
                onClick={toggleForm}
                className="open-ui-button open-ui-button--secondary w-full !text-black"
              >
                <span className="ripple md-ripple block open-ui-button-inner">
                  Register
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

Login.propTypes = {
  toggleForm: PropTypes.func.isRequired,
};

export default Login;
