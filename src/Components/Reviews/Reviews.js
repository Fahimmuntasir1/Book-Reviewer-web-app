import React from "react";
import useReview from "../../hook/useReviews";
import Card from "../Card/Card";

const Reviews = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div>
      <div>
        <h2 className="text-4xl font-semibold my-10">Happy Clints</h2>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {reviews.map((reviewItem) => (
            <Card key={reviewItem.id} review={reviewItem}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
