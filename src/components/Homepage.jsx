import React, { useEffect, useState } from "react";
import file from "./test.json";
import Card from "./Card";
import file2 from "./test2.json";
import "../css/homepage.css";

const Home = () => {
  const [val, func] = useState([]);
  // // const apiurl = "https://dummyjson.com/quotes?limit=50";
  // let apiurl ="https://api.quotable.io/quotes/random?limit=40";
  // // const apiurl = "https://zenquotes.io/api/quotes";
  // const api = async (url) => {
  //   const apidata = await fetch(url);
  //   const data = await apidata.json();
  //   console.log(data);
  //   func(data);
  // };
  useEffect(() => {
    // api(apiurl);
    console.log(file2);
    func(file2);
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
        {val.map((quote, index) => (
          <Card key={index} main={quote.content} author={quote.author} />
        ))}
      </div>

     
    </>
  );
};
export default Home;
