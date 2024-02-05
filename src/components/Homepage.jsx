import React, { useEffect, useState } from "react";
import file from "./test.json";
import Card from "./Card";
import file2 from "./test2.json";
import "../css/homepage.css";

const Home = () => {
  const [val, func] = useState([]);
  const [loading, loadingfunc] = useState(true);

  useEffect(() => {
    const api = async (url) => {
      try {
        const apidata = await fetch(
          "https://api.quotable.io/quotes/random?limit=6"
        );
        const data = await apidata.json();
        func(data);
      } catch (e) {
        func(file2);
      } finally {
        loadingfunc(false);
      }
    };
    api();
  }, []);

  return (
    <>
      <div className="bg">
        <div className="h">
          <h1>Welcome to... </h1>
        </div>
        <div className="new">
          <div className="container">
            <h1 className="text">QuoteKar.</h1>
          </div>
        </div>
      </div>

      <div className="cardd">
        {loading ? (
          <h1 className="h">
            <br />
            <br />
            Please Wait Data is being loaded...
            <br />
            <br />
            <br />
            Thank You For your Patience...
            <br />
            <br />
            <br />
            Loading...
            <br />
            <br />
            <br />
          </h1>
        ) : (
          val.map((quote, index) => (
            <Card key={index} main={quote.content} author={quote.author} />
          ))
        )}
      </div>
    </>
  );
};
export default Home;
