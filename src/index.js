import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "How to Compete and Win with Artificial Intelligence";
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/41sGqA-HQiL.jpg"
        alt="AI Book"
        width="200"
        height="300"
      />
      <h3>{title}</h3>
      <h4>Author: Ash Fontana </h4>;
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
