import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// setuo vars 
const title ="Eyes that kiss in the corners";

function BookList() {

  return (
    <section className="booklist">
      <Book title={title}/>
      <Book job='developer' number={22}> <p>hdckhdkhdskhadckdsaghkhadgskhdsagkhadsgh</p></Book>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = ({title, children}) => {
  console.log(title);
  const author = 'Johanna Ho';
  return (
    <article className='book'>
      <Image />
      <Title />
      <h4 style={{marginTop: '0.25rem', letterSpacing: '5px'}}>{author.toUpperCase()}</h4>
      <p style={{color: "blue"}}>{title}</p>
      {children}
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/S/gladiator-image-upload-prod/1/ATVPDKIKX0DER/4d9160f47a2efbf591ca16fbe1a07979._CR0,0,476,583_AC_SL180_QL70_.jpg"
    alt="book"
  />
);

const Title = () => <h1>Eyes that kiss in the corners</h1>;
 
ReactDom.render(<BookList />, document.getElementById("root"));
