import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className=" intro-page flex items-center justify-between">
      <div className="title-overview text-left ml-6">
        <h2 className="text-5xl font-bold">
          Eloquent JavaScript <br />{" "}
          <span className="text-3xl font-semibold font-serif">
            3rd edition (2018)
          </span>{" "}
        </h2>
        <p className="text-2xl mt-1">
          This is a book about JavaScript, programming, and the wonders of the
          digital. You can read it online here, or buy your own paperback copy.
        </p>
        <div className="mt-5">
          <button className="p-2 bg-yellow-400 text-1xl text-bold ">
            <a href="https://eloquentjavascript.net/"target="_blank" rel="noreferrer">Explore Now!</a>
          </button>
        </div>
      </div>
      <div className="image">
        <img
          className=""
          src="./images/book.jpg"
          alt="Book"
          width="600px"
        ></img>
      </div>
    </div>
  );
};

export default Home;
