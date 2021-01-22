import React from 'react'

export const Book = ({ title, author, img }) => {
   // attribute, eventHandler
  const clickHandler = () => {
    alert('hello world');
  }
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h1>{title}</h1>
      <h4 style={{ marginTop: "0.25rem", letterSpacing: "5px" }}>
        {author.toUpperCase()}
      </h4>
      <button type="button" onClick={clickHandler}>OK</button>

    </article>
  );
}

