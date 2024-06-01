import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

const currencyIcons = {
  USD: "🇺🇸",
  EUR: "🇪🇺",
  CAD: "🇨🇦",
  GBP: "🇬🇧",
  JPY: "🇯🇵",
  AUD: "🇦🇺",
};

// Function to get locale day of the date
const getDayName = (date) => {
  const options = { weekday: "short" };
  return new Date(date).toLocaleDateString("en-US", options); 
}

const LiveExchangeRates = ({ baseCurrency = "USD" }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchExchangeRates = async () => {
      try {
        const days = 7; // Last 7 days
        const today = new Date();
        const chartData = [];

        for(let i = 0; i < days; i++) {
          const date = new Date(today);
          date.setDate(date.getDate() - i);
          const formattedDate = getDayName(date);

          const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)

          const ratesArray = Object.entries(response.data.rates).map(([currency, rate]) => ({
            currency,
            rate
          }));

          chartData.push(...ratesArray)

          console.log(chartData)


          chartData.unshift({
            date: formattedDate,
            rate: chartData,
          });     
        }
     
        setData(chartData);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching exchange rates:", error )
      }
    }
 
    fetchExchangeRates();
  }, [baseCurrency]);

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
        </div>
        <div>
          <div>
            <div className="m-h-[160px]">
           
            
                <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>

                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="rate"                    
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
        
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




export default LiveExchangeRates;
