import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Phonetic from "./Phonetic";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);
  let [phonetic, setPhonetic] = useState(null);
  let [showQuestion, setShowQuestion] = useState(true);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePhoneticResponse(response) {
    if (response.data[0].phonetics[0].audio) {
      setPhonetic(response.data[0].phonetics[0].audio);
    } else {
      setPhonetic(null);
    }
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = "o7aa001199a3fa308a4b424t253e2953";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let apiSecondaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiSecondaryUrl).then(handlePhoneticResponse);

    let pexelsApiKey =
      "N3SqS8NSUGPzJtFLZB0mY2ULCogqVAnZLNxZe2reth3X5NkMLCcoa6i8";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;

    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

    setShowQuestion(false); //hiding the question when search
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
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
      <section>
        {questionGreeting}
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter word here..."
            onChange={handleKeywordChange}
          />
        </form>
        <Phonetic phonetic={phonetic} />
        <Results results={results} />
        <Photos photos={photos} />
      </section>
    </div>
  );
}
