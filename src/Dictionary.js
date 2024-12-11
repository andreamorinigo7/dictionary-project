import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Phonetic from "./Phonetic";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);
  let [phonetic, setPhonetic] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "o7aa001199a3fa308a4b424t253e2953";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let apiSecondaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiSecondaryUrl).then(handlePhoneticResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handlePhoneticResponse(response) {
    console.log(response.data[0].phonetics[0].audio);
    setPhonetic(response.data[0].phonetics[0].audio);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter word here..."
          onChange={handleKeywordChange}
        />
      </form>
      <Phonetic phonetic={phonetic} />

      <Results results={results} />
    </div>
  );
}
