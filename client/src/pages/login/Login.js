import React from "react";
import "./login.css";

export default function Login() {
  return (
    <main className="login">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="e-mail" autoFocus={true} />
        <input type="password" placeholder="password" />
        <button>LOGIN</button>
      </form>
    </main>
  );
}
