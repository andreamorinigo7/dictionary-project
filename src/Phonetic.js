import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="phonetic">
        <a href={props.phonetic} target="_blank" rel="noreferrer">
          <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
        </a>
      </div>
    );
  } else {
    return null;
  }
}
