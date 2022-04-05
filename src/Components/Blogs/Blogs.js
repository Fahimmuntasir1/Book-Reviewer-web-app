import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold border-b-2 pb-3">QNA</h1>
      <div>
        <li className="text-2xl text-left ml-5">
          What is context api ? Purpose of using context api?
        </li>
        <p className="text-xl text-left ml-14 text-gray-500">
          The Context API is a React structure that enables you to exchange
          unique details and assists in solving prop-drilling from all levels of
          your application.This is the alternative to "prop drilling" or moving
          props from grandparent to child to parent, and so on. The purpose of
          this it provides a way to share values like these between components
          without having to separately pass a prop through every level of the
          tree. So we can easily do this.
        </p>
        <li className="text-2xl text-left ml-5">What is Semantic Tag?</li>
        <p className="text-xl text-left ml-14 text-gray-500">
          {" "}
          Semantic tags provides meaning to an HTML page rather than just
          presentation.A semantic element clearly describes its meaning to both
          the browser and the developer.It makes HTML more comprehensible by
          better defining the different sections and layout of web
          pages.Semantic HTML tags allow you to add meaning to your markup so
          that search engines, screen readers, and web browsers can make sense
          of it.So we must should use Semantic tag in our Website.
        </p>
        <li className="text-2xl text-left ml-5">
          About inline-block ,Inline-block-element.
        </li>
        <p className="text-xl text-left ml-14 text-gray-500">
          Inline-block elements are similar to inline elements, except they can
          have padding and margins added on all four sides.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
