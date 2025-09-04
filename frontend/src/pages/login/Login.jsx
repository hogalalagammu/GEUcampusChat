import React, { useState } from "react";
import styles from "./login.module.css";

const Login = () => {
  // 🔹 State variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Later: connect this with backend API
    console.log({
      username,
      password,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <h2 className={styles.title}>Login</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Username */}
          <div className={styles.inputGroup}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Forgot password */}
          <div className={styles.forgotPassword}>
            <a href="#">Forgot Password?</a>
          </div>

          {/* Submit */}
          <button type="submit" className={styles.submitBtn}>
            Login
          </button>
        </form>

        {/* Signup redirect */}
        <p className={styles.redirect}>
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
