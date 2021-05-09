import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const title = "How to Compete and Win with Artificial Intelligence";
const author = "Author: Ash Fontana";
const img = "https://m.media-amazon.com/images/I/41sGqA-HQiL.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt="AI Book" width="200" height="300" />
      <h3>{title}</h3>
      <h4>{author.toUpperCase()} </h4>;
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
