import React, { useState, useEffect }  from "react";
import "../styles/App.css";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const App = () => {
const [quote, setQuote] = useState(null);
const [backgroundColor, setBackgroundColor] = useState("#333");

useEffect(() => {
    fetchQuote();
}, []);

const fetchQuote = async () => {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        setQuote(data);
        changeBackgroundColor();
    } catch (error) {
        console.log(error);
    }
};

const changeBackgroundColor = () => {
    const colorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[colorIndex];
    setBackgroundColor(color);
};

return (
    <div id="main" style={{ backgroundColor }}>
        <div id="wrapper">
             {quote && (
             <div id="quote-box">
                 <div className="quote-text">{quote.content}</div>
                 <div className="quote-author">- {quote.author}</div>
                 <div className="buttons">
                     <button
                             id="new-quote"
                             className="button"
                             onClick={fetchQuote}
                           >
                      New Quote
                    </button>
                </div>
           </div>
           )}
        </div>
    </div>
  );
};
export default App;
