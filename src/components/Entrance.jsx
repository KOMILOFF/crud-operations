import React, { useRef, useState } from "react";

const Entrance = ({setSignet}) => {
  const [name, setName] = useState(``)
  const [password, setPassword] = useState(``)

  
  const submitted = (e) => {
    e.preventDefault()
    if (name == `admin` && password == `1234`) {
      setSignet(true)
    } else {
      alert(`Parol yoki login noto'g'ri`)
    }
  }

  return (
    <div className="full-body">
      <div className="log-in">
        <h1>CRUD OPERATIONS</h1>
        <h2>Sign In</h2>
        <span className="login-title">
          Enter your credentials to access your account
        </span>
        <form className="login-form" onSubmit={submitted}>
          <label className="login-label">Email</label>
          <input onChange={(e) => setName(e.target.value) }
            className="login-email"
            type="text"
            placeholder="Enter your email"
          />
          <label className="login-label">Password</label>
          <input onChange={(e) => setPassword(e.target.value)}
            className="login-password"
            type="text"
            placeholder="Enter your password"
          />
          <button className="login-btn" type="submit" >SIGN IN</button>
        </form>

        <p>
          Reset Password
          <span className="login-span">Forgot your password?</span>
        </p>
      </div>
    </div>
  );
};

export default Entrance;
