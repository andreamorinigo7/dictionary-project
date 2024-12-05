import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");

  function search(event) {
    event.preventDefault();
    alert(`${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter word here..."
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
