import React from "react";
import Options from "./Options";

export default function Questions({ questions, dispatch, answer, index }) {
  // console.log(questions);

  return (
    <div>
      <h4>{questions.question}</h4>
      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
}
