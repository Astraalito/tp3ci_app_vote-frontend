import React, {useState} from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (username && password) {
      console.log(`logging in with credentials ${username} - ${password}`);
    }
  };

  return(
    <div>
      <div>
        <label htmlFor="username">
          Username
          <input type="text" id="username" value={username} onChange={event => {setUsername(event.target.value)}} required />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <input type="password" id="password" value={password} onChange={event => {setPassword(event.target.value)}} required />
        </label>
      </div>
      <button type="button" onClick={login}>Se connecter</button>
    </div>
  );
}