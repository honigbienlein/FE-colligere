import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router";
import "../css/signin.css";

export default function Signin() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  function login() {
    console.lot("get");
    axios
      .get(`https://colligere.herokuapp.com/books/users/${usernameRef}`)
      .then(async (data) => {
        if (usernameRef === data.username) {
          console.log("username");
          if (passwordRef === data.password) {
            console.log("password");
            navigate("/collections");
          } else {
            <dialog>
              <p>Your password is wrong</p>
            </dialog>;
          }
        }
      });
  }
  return (
    <>
      <form onSubmit={login}>
        <div className="signin">
          <input
            ref={usernameRef}
            placeholder="Username"
            name="username"
            className="input"
          />
          <input
            ref={passwordRef}
            placeholder="Password"
            name="password"
            type="password"
            className="input"
          />
          <button type="submit" className="buttonSignIN">
            Sign In
          </button>
        </div>
        {/* <p className="forgot"><a href="/">Forgot Password?</a></p> */}
      </form>
    </>
  );
}
