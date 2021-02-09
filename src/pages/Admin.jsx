import React, { useState } from "react";

export default function Admin() {
  const [newQuestion, setNewQuestion] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const createUser = () => {
    if (newUsername && newPassword) {
      console.log(`creating user with credentials ${newUsername} - ${newPassword}`);
    }
  };

  const createQuestion = () => {
    if (newQuestion) {
      console.log(`creating question : ${newQuestion}`);
    }
  };

  return(
    <div>
      <h2>
        Nouveau vote
      </h2>
      <div>
        <label htmlFor="question">
          Question
          <br />
          <input type="text" id="question" value={newQuestion} onChange={event => {setNewQuestion(event.target.value)}} required />
        </label>
      </div>
      <button type="button" onClick={createQuestion}>Se connecter</button>
      <h2>
        Nouvel utilisateur
      </h2>
      <div>
        <label htmlFor="username">
          Username
          <input type="text" id="username" value={newUsername} onChange={event => {setNewUsername(event.target.value)}} required />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <input type="password" id="password" value={newPassword} onChange={event => {setNewPassword(event.target.value)}} required />
        </label>
      </div>
      <button type="button" onClick={createUser}>Se connecter</button>
    </div>
  );
}