import React, { useState } from "react";
import "./VotePanel.css";

export default function VotePanel({question, votes, hasVoted}) {
  const [voted, setVoted] = useState(hasVoted);
  return(
    <div className="container">
      <h4>
        {question}
      </h4>
      <div>
        <button type="button" onClick={() => {setVoted(!voted)}}>
          {voted ? "💖" : "🖤"}
        </button>
        <span>
          {votes === 1 ? `${votes} vote` : `${votes} votes`}
        </span>
      </div>
    </div>
  );
}