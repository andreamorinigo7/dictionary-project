import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Phonetic from "./Phonetic";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);
  let [phonetic, setPhonetic] = useState(null);
  let [showQuestion, setShowQuestion] = useState(true);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePhoneticResponse(response) {
    if (response.data[0].phonetics[0].audio) {
      setPhonetic(response.data[0].phonetics[0].audio);
    } else {
      setPhonetic(null);
    }
  }
  function search(event) {
    event.preventDefault();
    setShowQuestion(false); //hiding the question when search

    let apiKey = "o7aa001199a3fa308a4b424t253e2953";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let apiSecondaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiSecondaryUrl).then(handlePhoneticResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  let questionGreeting;
  if (showQuestion) {
    questionGreeting = (
      <h1 className="greeting">What word are you curious about?</h1>
    );
  } else {
    questionGreeting = null;
  }

  return (
    <div className="Dictionary">
      {questionGreeting}
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
