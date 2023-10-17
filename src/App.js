import React from "react";
import Accordion from "./Components/Accordion";
import "./Components/Accordion"; // Import the CSS for styling



const items = [
  {
  title: (
    <span className="span-title">
      About Us <p> 4 Articles in this Topic</p>
    </span>
  ),
  /*content: (
    <span className="span-content"> How does Parkname seperate itself from other domain name parking companies?
    <p>Your domains are a valuable online propery. As in any investment, you want the most efficient, easy way to make sure your property is</p></span>
    )*/
},

   {
    title:
      "How does Parkname seperate itself from other domain name parking companies?",
    content:
      " Your domains are a valuable online propery. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitabile. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.",
  },
  {
    title: "Is Parkname actually free ?",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    title: "What you do?",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    title: "When was Parkname first founded?",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion items={items} />
    </div>
  );
}

export default App;
