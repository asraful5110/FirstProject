import "./search.css";
import { useState, useRef } from "react";
import suggestions from "./searchSuggestions";
const Search = () => {
  const input = useRef(null);
  let [test, setTest] = useState([]);


  const generateValue = (e)=>{
    let uservlaue = e.target.innerText;
   input.current.value = uservlaue
  }



  const whenKeyDown = (e) => {
    let userInput = e.target.value.toLocaleLowerCase();

    let filter = suggestions.filter((val) => {
      return val.toLocaleLowerCase().startsWith(userInput);
    });

    if (userInput) {
      setTest(filter);
    } else {
      setTest([]);
    }
  };

  return (
    <div className="search">
      <div className="searchBox">
        <h4 className="title">Search your intersted content</h4>
        <div className="userSearchInputBox">
          <input
            type="text"
            placeholder="Type your question ?"
            ref={input}
            onKeyUp={whenKeyDown}
          />
          <button className="searchBtn">Search</button>
        </div>
        <div className="searchSuggestionBox">
          <ul>
            {test.map((item, ind) => {
              return <li key={ind} onClick={generateValue}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
