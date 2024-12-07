import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <div className="text-container">
        <span>
          <h3>{props.meaning.partOfSpeech}</h3>
        </span>
        <span className="dashed-line"></span>
      </div>
      <div className="def-meaning">meaning</div>
      <div className="definition">
        <p>{props.meaning.definition}</p>
      </div>

      <div className="example">
        {" "}
        <p>
          <em> {props.meaning.example}</em>
        </p>
      </div>
      <br />
    </div>
  );
}
