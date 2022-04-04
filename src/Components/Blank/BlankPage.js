import React from "react";
import "./BlankPage.css";

const blankPage = () => {
  return (
    <div className="blank">
      <h2 className="text-6xl font-semibold pt-5">Oops!</h2> <br />
      <h2 className="text-5xl">404</h2>
      <p className=" text-3xl mt-2 pb-4">Page Not Found !</p>
    </div>
  );
};

export default blankPage;
