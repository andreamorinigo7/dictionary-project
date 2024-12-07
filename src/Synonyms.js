import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <span className="synonym-title">synonyms</span>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span className="synonym-example" key={index}>
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
