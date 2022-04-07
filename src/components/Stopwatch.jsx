import React, { useState } from "react";
import "./Stopwatch.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";

function Stopwatch() {
  const [timer, setTimer] = useState(0);
  const [timeron, setTimeron] = useState(false);
  useEffect(() => {
    let id;
    if (timeron) {
      id = setInterval(() => {
        setTimer((e) => e + 10);
      }, 10);
    } else {
      clearInterval(id);
    }
    return () => {
      clearInterval(id);
    };
  });
  return (
    <div>
      <div className="linkStyle">
        <p className="heading">Stopwatch</p>
        <div className="timeStamp">
          <span>{("0" + (Math.floor(timer / 60000) % 60)).slice(-2)}</span>:
          <span>{("0" + (Math.floor(timer / 1000) % 60)).slice(-2)}</span>:
          <span>{("0" + (Math.floor(timer / 10) % 100)).slice(-2)}</span>
        </div>
        <button className="btnStart" onClick={() => setTimeron(!timeron)}>
          {!timeron ? (
            <FontAwesomeIcon className="FontAwesomeIcon" icon={faPlay} />
          ) : (
            <FontAwesomeIcon className="FontAwesomeIcon" icon={faPause} />
          )}
        </button>
        {timer > 0 && (
          <button className="btnStart" id="stopBtn" onClick={() => setTimer(0)}>
            <FontAwesomeIcon className="FontAwesomeIcon" icon={faStop} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Stopwatch;
