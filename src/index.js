import React, { Children } from "react";
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
      >
        <p>
          Have spent many years working in the trucking business, and decided
          now is the right time to branch out and set up your own company?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt="AI Book" width="200" height="300" />
      <h2>{title}</h2>
      <h5>{author} </h5>
      <p>{children}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
