import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition">
        <p>{props.meaning.definition}</p>
      </div>
      <br />
      <div className="example">
        {" "}
        <em> {props.meaning.example}</em>
      </div>
      <br />
    </div>
  );
}
