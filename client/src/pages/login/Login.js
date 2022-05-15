import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <h3>Login page</h3>
      <form>
        <input type="text" placeholder="e-mail" autoFocus={true} />
        <input type="password" placeholder="password" />
        <button>LOGIN</button>
      </form>
    </div>
  );
}
