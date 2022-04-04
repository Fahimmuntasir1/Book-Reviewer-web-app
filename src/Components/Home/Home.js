import React from "react";
import { Link } from "react-router-dom";
import useReview from "../../hook/useReviews";
import Card from "../Card/Card";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div>
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
            digital. You can read it online here, or buy your own paperback
            copy.
          </p>
          <div className="mt-5">
            <button className="p-2 bg-yellow-400 text-1xl text-bold ">
              <a
                href="https://eloquentjavascript.net/"
                target="_blank"
                rel="noreferrer"
              >
                Explore Now!
              </a>
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
      <div className=" my-5">
        <h2 className="text-4xl font-semibold my-10">Customer Reviews</h2>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {reviews.slice(1, 4).map((reviewItem) => (
            <Card key={reviewItem.id} review={reviewItem}></Card>
          ))}
        </div>
        <button >
          {" "}
          <Link className="px-5 py-2 bg-yellow-400" to="/reviews">See All</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
