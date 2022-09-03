import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router";
import "../css/signup.css";

export default function Signup() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  function signup() {
    axios.post("/", {
      data: {
        username: usernameRef,
        email: emailRef,
        password: passwordRef,
      },
    });
    navigate("/collections");
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
