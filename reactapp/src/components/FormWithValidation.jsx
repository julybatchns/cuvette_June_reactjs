import { useState } from "react";

const FormWithValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
    } else {
      setError("");
      setEmail("");
      setPassword("");
      console.log("Form Submitted:", { email, password });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          {error ? <p style={{ color: "red" }}>{error}</p> : <></>}
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default FormWithValidation;
