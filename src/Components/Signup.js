import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router";
import "../css/signup.css";

export default function Signup() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  async function signup(event) {
    event.preventDefault();
    const user = await axios.post("https://colligere.herokuapp.com/users", {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    console.log(user);
    navigate(`/users/${user.data.id_user}/collections`);
  }
  return (
    <form onSubmit={signup}>
      <div className="signup">
        <input
          ref={usernameRef}
          placeholder="Username"
          name="username"
          className="input"
        />
        <input
          ref={emailRef}
          placeholder="E-Mail"
          name="email"
          className="input"
        />
        <input
          ref={passwordRef}
          placeholder="Password"
          name="password"
          type="password"
          className="input"
        />
        <button type="submit" className="buttonSignUP">
          Sign Up
        </button>
      </div>
    </form>
  );
}
