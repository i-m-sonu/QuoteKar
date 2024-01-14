import React, { useEffect, useState } from "react";
import file from "./test.json";
import Card from "./Card";
import file2 from "./test2.json";
import "../css/homepage.css";

const Home = () => {
  const [val, func] = useState([]);
  const [loading, loadingfunc] = useState(true);
  // const apiurl = "https://dummyjson.com/quotes?limit=30";
  // let apiurl = "https://api.quotable.io/quotes/random?limit=30";
  // const apiurl = "https://zenquotes.io/api/quotes";

  useEffect(() => {
    const api = async (url) => {
      try {
        setTimeout(async () => {
          const apidata = await fetch("https://api.quotable.io/quotes/random?limit=30");
          const data = await apidata.json();
          console.log(data);
          func(data);
        }, 50);
      } catch (e) {
        func(file2);
      } finally {
        loadingfunc(false);
      }
    };
    api();
    // console.log(file2);
    // func(file2);
  }, []);
  // const handleClick = ()=>{
  //     document.getElementById("").style.backgroundColor = ""
  // }
  return (
    <>
      {/* <img className="img" src={Img} alt="" /> */}
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
            <br />
            Please Wait Data is being loaded
            <br />
            <br />
            <br />
            Thank You For your Patience
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
