import React, { useEffect, useState } from "react";
import VotePanel from "../components/VotePanel";

export default function Vote() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    setQuestions([
      {id: 1, title: "What is love?", votes: 15, hasVoted: true},
      {id: 2, title: "Who?", votes: 1337, hasVoted: false},
      {id: 3, title: "Where?", votes: 99999, hasVoted: false},
    ]);
  }, []);
  return (
    <div>
      <h2>Votes</h2>
      <div>
        {questions.map(question => <VotePanel question={question.title} votes={question.votes} hasVoted={question.hasVoted} key={question.id} />)}
      </div>
    </div>
  );
}