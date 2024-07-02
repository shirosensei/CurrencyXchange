import React, { useState, useEffect } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;





const LiveExchangeRates = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currencyList, setCurrencyList] = useState([
    "USD",
    "GBP",
    "JPY",
    "CAD",
    "EUR",
  ]); // Default list of selectable currencies

  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const handleSelection = (currency) => {
    setSelectedCurrency(currency);
  };

  const fetchExchangeRates = async () => {
    const days = 30; // Last 30 days
    const today = new Date();
    const historicalData = [];

    for (let i = 0; i < days; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const formattedDate = date.toISOString().split("T")[0];

      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
        );

        const ratesArray = Object.entries(response.data.conversion_rates).map(
          ([currency, rate]) => ({
            currency,
            rate,
            date: formattedDate,
          })
        );

        historicalData.push(...ratesArray); // Add rates for all currencies
      } catch (error) {
        console.error(`Error fetching data for ${formattedDate}:`, error);
      }
    }

    return historicalData;
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchExchangeRates();
      setData(data);
    };

    loadData();
  }, []);

  return (
    <section className="flex justify-center bg-text-primary py-20">
      <div className="flex w-full max-w-screen-xl flex-col gap-4 px-5 md:gap-16 md:px-10">
        <div className="grid gap-3">
          <h2 className="text-center text-3xl font-semibold text-text-secondary tracking-tight md:text-5xl">
            Live exchange rates
          </h2>
          <h3 className="text-center font-normal text-text-secondary md:text-xl">
            Compare 100+ currencies in real time & find the right moment to make
            the move
          </h3>
          <h4 className="text-center">Select a Currency</h4>
        </div>

        <div className="currency-list grid grid-cols-3 gap-4">
          <select
            onChange={(e) => handleSelection(e.target.value)}
            className="currency-button bg-gray-200 p-4 rounded border border-solid  border-secondary shadow hover:bg-gray-300"
          >
            {data.map((item, index) => (
              <option key={index}>{item.currency}</option>
            ))}
          </select>
        </div>
        <div>
          <div>
            <div className="m-h-[160px]">
              {selectedCurrency && (
                <div className="currency-chart mt-6">
                  {/* <h3>Chart for {selectedCurrency}</h3> */}
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart
                      width={500}
                      height={200}
                      // data={mockData}
                      data={data
                        .filter((item) => item.currency === selectedCurrency)
                        .map((entry) => ({
                          // date: new Date(entry.date).toLocaleDateString(
                          //   "en-US",
                          //   { weekday: "short" }
                          // ), // Ensure `date` is formatted properly
                          rate: entry.rate, // Use the correct `rate` value
                        }))}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      {/* <Legend /> */}
                      <Area
                        type="monotone"
                        dataKey="rate"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />

                      {/* <Area
                        type="monotone"
                        dataKey="rate"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      /> */}
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveExchangeRates;
