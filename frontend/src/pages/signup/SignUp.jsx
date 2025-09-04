import React, { useState } from "react";
import styles from "./signup.module.css";

const SignUp = () => {
  // 🔹 State variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");

  // 🔹 Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Later: connect this with backend API
    console.log({
      username,
      email,
      password,
      confirmPassword,
      gender,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <h2 className={styles.title}>Create an Account</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Username */}
          <div className={styles.inputGroup}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Choose your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <p className={styles.note}>
              You can pick any username. To protect your privacy, avoid using your real name.
            </p>
          </div>

          {/* Email */}
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your GEU email (e.g., 21021771@geu.ac.in)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className={styles.note}>Use your official GEU email for verification.</p>
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

          {/* Confirm Password */}
          <div className={styles.inputGroup}>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Gender */}
          <div className={styles.inputGroup}>
            <label>Gender</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="na"
                  checked={gender === "na"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Prefer not to say
              </label>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className={styles.submitBtn}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
