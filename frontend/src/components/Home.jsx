import React, { useState, useEffect } from "react";
import axios from "axios";
import LiveExchangeRates from "./LiveExchangeRates";

const Home = () => {
  const [rates, setRates] = useState({});
  const [currency, setCurrency] = useState("1.00");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");

  const apiKey = import.meta.env.VITE_API_KEY;

  // useEffect(() => {
  //   console.log("effect run, currency is now", currency);

  //   // skip if currency is not defined
  //   if (currency) {
  //     console.log("fetching exchange rates.");
  //     axios
  //       .get(`https://open.er-api.com/v6/latest/${currency}`)
  //       .then((response) => {
  //         setRates(response.data.rates);
  //       });
  //   }
  // }, [currency]);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };


  return (
    <><section className="bg-primary-dark min-h-screen pt-16 custom text-center text-text-primary">
      <h1 className="text-2xl mb-4 font-semibold">
        Currency Xchange Converter{" "}
      </h1>
      <p className="mb-5">Check real time currency exchange rates</p>

      <div className="pt-6 px-2 bg-text-primary text-text-secondary mx-5 pb-3.5 rounded-lg min-h-64 [box-shadow:-5px_5px_5px_-2px_rgba(0,0,0,0.3),5px_5px_5px_-2px_rgba(0,0,0,0.3)]">
        <div className="grid grid-cols-4 gap-1 rounded-full border border-solid border-secondary p-2 mb-5 md:gap-2">
          <a
            href=""
            className="bg-primary-dark text-text-primary hover:bg-text-secondary [&_svg]:fill-text-primary flex h-9 items-center justify-center gap-2 rounded-full text-center text-sm font-semibold transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="inherit"
              viewBox="0 0 48 48"
              width="24"
              color="inherit"
              className="hidden w-5 md:block"
            >
              <path d="M33.333 17.45v-.95c0-4.275-6.305-7.5-14.666-7.5C10.305 9 4 12.225 4 16.5v6.818c0 3.561 4.375 6.39 10.667 7.238v.944c0 4.275 6.305 7.5 14.666 7.5C37.695 39 44 35.775 44 31.5v-6.818c0-3.529-4.237-6.361-10.667-7.233ZM12 27.216c-3.265-.933-5.333-2.469-5.333-3.899V20.92c1.36.985 3.181 1.78 5.333 2.313v3.983Zm13.333-3.984c2.152-.534 3.974-1.328 5.334-2.313v2.398c0 1.43-2.069 2.966-5.334 3.898v-3.983Zm-2.666 12.165c-3.265-.932-5.334-2.468-5.334-3.898v-.71a31.383 31.383 0 0 0 3.232-.03c.689.25 1.39.465 2.102.64v3.998Zm0-7.605c-1.325.2-2.662.3-4 .298a26.573 26.573 0 0 1-4-.298v-4.055c1.326.176 2.662.264 4 .262a29.965 29.965 0 0 0 4-.262v4.055Zm10.666 8.181a26.963 26.963 0 0 1-8 0V31.91a29.949 29.949 0 0 0 8 .01v4.055Zm8-4.474c0 1.43-2.068 2.966-5.333 3.898v-3.983c2.152-.534 3.973-1.328 5.333-2.313V31.5Z"></path>
            </svg>
            <span className="overflow-xs-hidden text-ellipsis whitespace-nowrap">
              Convert
            </span>
          </a>
          <a
            href=""
            className="bg-transparent text-text-secondary hover:bg-disabled [&_svg]:fill-text-secondary flex h-9 items-center justify-center gap-2 rounded-full text-center text-sm font-semibold transition-colors duration-200"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="inherit"
              viewBox="0 0 48 48"
              width="24"
              color="inherit"
              className="hidden w-5 md:block"
            >
              <path d="M41.77 7H6.23a3.31 3.31 0 0 0-2.284.905A3.025 3.025 0 0 0 3 10.091v27.818c0 .82.34 1.606.946 2.186.606.58 1.428.905 2.285.905h35.538a3.31 3.31 0 0 0 2.285-.905c.606-.58.946-1.366.946-2.186V10.091c0-.82-.34-1.606-.946-2.186A3.306 3.306 0 0 0 41.769 7Zm-3.232 26.273c.429 0 .84.162 1.143.452.303.29.473.683.473 1.093 0 .41-.17.803-.473 1.093-.303.29-.714.453-1.142.453H9.461c-.429 0-.84-.163-1.143-.453a1.512 1.512 0 0 1-.473-1.093V13.182c0-.41.17-.803.473-1.093.303-.29.714-.453 1.143-.453.428 0 .839.163 1.142.453.303.29.473.683.473 1.093v12.155l7.043-5.616a1.671 1.671 0 0 1 1.93-.099l8.683 5.543 8.766-6.99a1.661 1.661 0 0 1 1.18-.35c.427.037.821.234 1.095.55.274.315.407.721.367 1.13a1.526 1.526 0 0 1-.575 1.047l-9.692 7.727a1.67 1.67 0 0 1-1.93.099l-8.683-5.543-8.184 6.526v3.912h27.461Z"></path>
            </svg>
            <span className="overflow-xs-hidden text-ellipsis whitespace-nowrap">
              Charts
            </span>
          </a>
          <a
            href=""
            className="bg-transparent text-text-secondary hover:bg-disabled [&_svg]:fill-text-secondary flex h-9 items-center justify-center gap-2 rounded-full text-center text-sm font-semibold transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="inherit"
              viewBox="0 0 48 48"
              width="24"
              color="inherit"
              className="hidden w-5 md:block"
            >
              <path d="M41.592 32.76c-1.041-1.747-2.588-6.69-2.588-13.144 0-3.876-1.581-7.594-4.395-10.335C31.796 6.54 27.98 5 24.001 5c-3.979 0-7.795 1.54-10.609 4.28-2.813 2.742-4.394 6.46-4.394 10.336 0 6.457-1.549 11.397-2.59 13.144a2.866 2.866 0 0 0-.01 2.927c.263.446.642.817 1.098 1.074a3.06 3.06 0 0 0 1.502.394h7.653a7.279 7.279 0 0 0 2.606 4.198A7.625 7.625 0 0 0 24.001 43a7.625 7.625 0 0 0 4.743-1.647 7.278 7.278 0 0 0 2.606-4.198h7.654c.527 0 1.045-.137 1.501-.395a2.963 2.963 0 0 0 1.097-1.074 2.865 2.865 0 0 0-.01-2.926ZM24 40.078a4.58 4.58 0 0 1-2.598-.805 4.399 4.399 0 0 1-1.644-2.118h8.484a4.398 4.398 0 0 1-1.644 2.118 4.582 4.582 0 0 1-2.598.805Z"></path>
            </svg>
            <span className="overflow-xs-hidden text-ellipsis whitespace-nowrap">
              Alerts
            </span>
          </a>
          <a
            href=""
            className="bg-transparent text-text-secondary hover:bg-disabled [&_svg]:fill-text-secondary flex h-9 items-center justify-center gap-2 rounded-full text-center text-sm font-semibold transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="inherit"
              viewBox="0 0 48 48"
              width="24"
              color="inherit"
              className="hidden w-5 md:block"
            >
              <path d="M42.9 8.444v.025l-9.873 32.568A2.695 2.695 0 0 1 30.418 43a2.69 2.69 0 0 1-2.446-1.553l-6.058-12.791a.679.679 0 0 1 .134-.77l9.714-9.718a1.357 1.357 0 0 0-1.92-1.92l-9.728 9.716a.678.678 0 0 1-.77.135L6.62 20.07a2.777 2.777 0 0 1-1.618-2.63 2.697 2.697 0 0 1 1.963-2.464l32.561-9.875h.026A2.714 2.714 0 0 1 42.9 8.444Z"></path>
            </svg>
            <span className="overflow-xs-hidden text-ellipsis whitespace-nowrap">
              Send
            </span>
          </a>
        </div>
        <div className="relative grid grid-cols-1 grid-rows-1 gap-2 md:grid-cols-[33%_1fr] md:grid-rows-[none]">
          <div className="h-[84px] rounded-lg border border-solid border-secondary bg-text-primary px-4 py-2 text-2xl font-semibold text-text-secondary hover:bg-disabled hover:bg-opacity-80 has-[input:focus]:outline has-[input:focus]:outline-2 has-[input:focus]:outline-secondary">
            <label
              htmlFor="amount"
              className="absolute flex top-4 text-sm font-normal"
            >
              Amount
            </label>
            <div className="cpnuFh esline !flex !h-full !items-end !border-none !p-0 !pb-2 !shadow-none [&_:is(span.amount-input)]:w-full">
              <span className="fVCqnZ iqYQgf">1.00</span>
              <span className="amount-input inline-flex whitespace-nowrap font-semibold">

                <input
                  type="text"
                  className="fVCqnZ outline-none"
                  // placeholder="1.00"
                  value={currency}
                  onChange={handleChange} />
              </span>
            </div>
            <div className="fkpUOL relative top-1"></div>
          </div>
          <div className="relative flex flex-col justify-evenly gap-2 md:flex-row">
            <div className="relative flex h-[84px] w-full select-none flex-col justify-center rounded-lg border border-solid border-secondary bg-text-primary font-semibold text-text-secondary hover:bg-disabled hover:bg-opacity-80 has-[input:focus]:outline has-[input:focus]:outline-2 has-[input:focus]:outline-secondary group/from">
              <label
                htmlFor="fromCurrency"
                className="absolute left-4 top-4 text-sm font-normal group-has-[.expanded]/from:hidden"
              >
                From
              </label>
              <div className="relative h-full">
                <div
                  className="gBKtNG relative h-full w-full [&_:is(input,.combobox-input)]:!w-full [&_:is(input,.combobox-input)]:!border-0 [&_is:(input,.combobox-input)]:!border-none [&_:is(input, .combobox-input)]:!p-0 [&_:is(input,.combobox-input)]:!shadow-none [&_:is(input, .combobox-input)]:focus:border-0 [&_:is(input, .combobox-input)]:focus:border-none [&_ul]:mt-2 px-4 md:pr-10 [&_:is(input,.combobox-input-placeholder)]:!pr-10 [&_:is(input, .combobox-input-placeholder)]:!pl-5"
                  id="midmarketFromCurrency"
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="cpnuFh ehIzJv combobox-input"
                  >
                    <div className="grid h-full w-full gap-2">
                      <div className="grid grid-cols-[auto_auto_1fr] items-center gap-2 pt-3">
                        <div className="relative border border-[#00113326] !h-5 !w-5 overflow-hidden rounded-full border-none [&_img]:!scale-150">
                          <img
                            alt="usd"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            src="https://www.xe.com/svgs/flags/usd.static.svg"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: "0px",
                              color: "transparent",
                            }} />
                        </div>
                        <div className="top-1 flex-grow overflow-hidden text-allipsis whitespace-nowrap text-left">
                          <span className="text-lg font-semibold text-text-secondary">
                            USD
                          </span>
                          <span className="text-lg font-semibold text-text-secondary">
                            {" "}
                            - US Dollar
                          </span>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="inherit"
                          viewBox="0 0 16 10"
                          aria-hidden="true"
                          width="24"
                          color="inherit"
                          className="relative -top-1 right-[12px] w-4 self-center justify-self-end text-greyblue-300"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M8 9.5L.5 2 1.55.95 8 7.4 14.45.95 15.5 2 8 9.5z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </button>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 z-20 m-auto flex -translate-x-1/2 -translate-y-1/2 transform">
              <button
                className="inline-flex rounded-full border border-solid border-disabled bg-text-primary p-4 hover:bg-disabled"
                aria-label="Swap currencies"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 17"
                  aria-hidden="true"
                  className="h-4 w-4 rotate-90 text-greyblue-400 md:rotate-0"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M11.726 1.273l2.387 2.394H.667V5h13.446l-2.386 2.393.94.94 4-4-4-4-.94.94zM.666 12.333l4 4 .94-.94L3.22 13h13.447v-1.333H3.22l2.386-2.394-.94-.94-4 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="relative flex h-[84px] w-full select-none flex-col justify-center rounded-lg border border-solid border-secondary bg-text-primary font-semibold text-text-secondary hover:bg-disabled hover:bg-opacity-80 has-[input:focus]:outline has-[input:focus]:outline-2 has-[input:focus]:outline-secondary group/to">
              <label
                htmlFor="ToCurrency"
                className="absolute left-4 top-4 text-sm font-normal group-has-[.expanded]/to:hidden md:left-10"
              >
                To
              </label>
              <div
                className="gBKtNG relative h-full w-full [&_:is(input,.combobox-input)]:!w-full [&_:is(input,.combobox-input)]:!border-0 [&_is:(input,.combobox-input)]:!border-none [&_:is(input, .combobox-input)]:!p-0 [&_:is(input,.combobox-input)]:!shadow-none [&_:is(input, .combobox-input)]:focus:border-0 [&_:is(input, .combobox-input)]:focus:border-none [&_ul]:mt-2 px-4 md:pl-10 [&_:is(input,.combobox-input-placeholder)]:!pl-10 [&_:is(input, .combobox-input-placeholder)]:!pl-10"
                id="midmarketToCurrency"
              >
                <button
                  className="cpnuFh ehIzJv combobox-input"
                  aria-haspopup="true"
                  aria-expanded="false"
                  type="button"
                >
                  <div className="grid h-full w-full gap-2">
                    <div className="grid grid-cols-[auto_auto_1fr] items-center gap-2 pt-3">
                      <div className="relative border border-[#00113326] !h-5 !w-5 overflow-hidden rounded-full border-none [&_img]:!scale-150">
                        <img
                          alt="eur"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          src="https://www.xe.com/svgs/flags/eur.static.svg"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            color: "transparent",
                          }} />
                      </div>
                      <div className="top-1 flex-grow overflow-hidden text-ellipsis whitespace-nowrap text-left">
                        <span className="text-lg font-semibold text-text-secondary">
                          EUR
                        </span>
                        <span className="text-lg font-semibold text-text-secondary">
                          {" "}
                          - Euro
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="inherit"
                        viewBox="0 0 16 10"
                        aria-hidden="true"
                        width="24"
                        color="inherit"
                        className="relative -top-1 right-[12px] w-4 self-center justify-self-end text-greyblue-300"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M8 9.5L.5 2 1.55.95 8 7.4 14.45.95 15.5 2 8 9.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
                <div></div>
              </div>
            </div>
          </div>

        </div>
        <div></div>
        <div className="flex flex-col items-center gap-6 md:flex-row my-4 justify-end">
          <button className="order-1 h-fit w-full rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-text-primary transition-colors duration-200 hover:bg-blue-450 md:order-2 md:w-[234px]">
            Convert
          </button>
        </div>
      </div>
    </section>
    <LiveExchangeRates baseCurrency="USD" />
    </>
  );
};

export default Home;
