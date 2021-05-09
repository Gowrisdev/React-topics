import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/41sGqA-HQiL.jpg"
      alt="AI Book"
    />
  );
};

const Title = () => (
  <h3>
    The AI-First Company: How to Compete and Win with Artificial Intelligence
  </h3>
);
const Author = () => <h5> Ash Fontana </h5>;

ReactDom.render(<BookList />, document.getElementById("root"));
