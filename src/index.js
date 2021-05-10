import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const firstBook = {
  img: "https://m.media-amazon.com/images/I/41sGqA-HQiL.jpg",
  title: "How to Compete and Win with Artificial Intelligence",
  author: "Author: Ash Fontana",
};
const secondBook = {
  img: "https://m.media-amazon.com/images/I/41r7nyZ-SrS.jpg",
  title:
    "Trucking Business Startup:Start,Run,Scale a Profitable Trucking Company",
  author: "Ryan Butler",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="AI Book" width="200" height="300" />
      <h1>{title}</h1>
      <h5>{author} </h5>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
