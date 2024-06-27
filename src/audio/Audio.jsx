import React, { useRef } from "react";
import audio from "./audio.mp3";
import "./styles.css";
const AudioComponent = () => {
  const image = useRef();
  const a = new Audio(audio);
  const playAudio = () => {
    a.play();
    image.current.classList.add("move");
  };
  const pauseAudio = () => {
    a.pause();
    image.current.classList.remove("move");
  };

  return (
    <>
      <div className="container shadow text-center  justify-content-center gap-5 p-5">
        {/* <audio controls>
          <source src={audio} />
        </audio> */}
        <img
          ref={image}
          className="my-5 rounded-circle"
          width={200}
          height={200}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qI73B2SNCeByyQtgZas7ubpqfyFcR7RRKA&s"
          alt=""
        />
        <br />
        <button className="btn mx-2 btn-danger">Stop</button>
        <button onClick={pauseAudio} className="btn mx-2 btn-warning">
          Pause
        </button>
        <button onClick={playAudio} className="btn mx-2 btn-success">
          Start
        </button>
      </div>
    </>
  );
};

export default AudioComponent;
