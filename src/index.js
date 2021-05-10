import React, { Children } from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/41sGqA-HQiL.jpg",
    title: "How to Compete and Win with Artificial Intelligence",
    author: "Author: Ash Fontana",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/41r7nyZ-SrS.jpg",
    title:
      "Trucking Business Startup:Start,Run,Scale a Profitable Trucking Company",
    author: "Ryan Butler",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/419qC6jbR8L.jpg",
    title: "Instragram: The secret ATM in your Pocket",
    author: "Jason Heiber",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="AI Book" width="200" height="300" />
      <h2>{title}</h2>
      <h5>{author} </h5>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
