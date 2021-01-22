import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// array of books

const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/S/gladiator-image-upload-prod/1/ATVPDKIKX0DER/4d9160f47a2efbf591ca16fbe1a07979._CR0,0,476,583_AC_SL180_QL70_.jpg",
    title: "Eyes that kiss in the corners",
    author: "Johanna Ho",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/71N4oeWwYlL._AC_UL320_.jpg",
    title: "The Wonky Donkey",
    author: "Craig Smith",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/91laaRz2A2L._AC_UL320_.jpg",
    title: "The World Needs More Purple People",
    author: "Kristen Bell & Benjamin Hart",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { title, author, img } = props.book;
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h1>{title}</h1>
      <h4 style={{ marginTop: "0.25rem", letterSpacing: "5px" }}>
        {author.toUpperCase()}
      </h4>
      <p style={{ color: "blue" }}>{title}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
