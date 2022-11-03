import React, { useEffect, useState } from "react";
import './App.css';

const Quote = () => {
  function newQuote() {
    window.location.reload(false);
  }
const [quote, setQuote] = useState("");

  useEffect(() => {
      const url = "http://quotes.stormconsultancy.co.uk/random.json";

      const fetchData = async () => {
          try {
              const response = await fetch(url);
              const json = await response.json();
              console.log(json.quote);
              setQuote(
                json.quote + " - "+json.author
                );
          } catch (error) {
              console.log("error", error);
          }
      };

      fetchData();
  }, []);

  return (
      <div class = "box">
          <h1>Computer Quote</h1>
          <p>{quote}</p>
          <button onClick = {newQuote}>New Quote</button>
      </div>
  );
};

export default Quote;
