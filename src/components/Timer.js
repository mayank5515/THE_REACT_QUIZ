import React from "react";
import { useEffect } from "react";
export default function Timer({ dispatch, secondsRemaining }) {
  const min = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  //as we want to run the timer as soon as Timer mounts there it is best to do it seperately like this
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },

    [dispatch]
  );
  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
