import React, { useEffect, useState } from "react";
import VotePanel from "../components/VotePanel";

export default function Vote() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    setQuestions([
      {title: "What is love?", votes: 15, hasVoted: true},
      {title: "Who?", votes: 1337, hasVoted: false},
      {title: "Where?", votes: 99999, hasVoted: false},
    ]);
  }, []);
  return (
    <div>
      <h2>Votes</h2>
      <div>
        {questions.map(question => <VotePanel question={question.title} votes={question.votes} hasVoted={question.hasVoted} />)}
      </div>
    </div>
  );
}