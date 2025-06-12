import { useState } from "react";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log("Signing up with:", username, email, password);
    } else {
      console.log("Logging in with:", email, password);
    }
  };

  return (
    <div className="d-flex h-100 border" style={{ minHeight: "80vh" }}>
      <div
        className="d-flex flex-column justify-content-center align-items-center text-light w-50 p-5"
        style={{
          background: "linear-gradient(to top right,white,#006bff,#007bff)",
        }}
      >
        <h1>{isSignUp ? "Welcome Back!" : "New Here?"}</h1>
        <p>
          {isSignUp
            ? "Already have an account? Click below to sign in."
            : "Don't have an account? Click below to sign up."}
        </p>
        <button
          className="btn btn-outline-light"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? "SIGN IN" : "SIGN UP"}
        </button>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center text-dark w-50 p-5 bg-light">
        <h1>{isSignUp ? "Create Account" : "Sign In"}</h1>

        <div className="d-flex justify-content-center mb-3">
          <button className="btn btn-outline-secondary mx-2">
            <i className="bi bi-facebook"></i>
          </button>
          <button className="btn btn-outline-secondary mx-2">
            <i className="bi bi-instagram"></i>
          </button>
          <button className="btn btn-outline-secondary mx-2">
            <i className="bi bi-linkedin"></i>
          </button>
        </div>

        <p className="text-center">or use your email</p>

        <form className="w-100" onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="input-group mb-4">
              <span className="input-group-text">
                <i className="bi bi-person-fill"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          <div className="input-group mb-4">
            <span className="input-group-text">
              <i className="bi bi-envelope-fill"></i>
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group mb-4">
            <span className="input-group-text">
              <i className="bi bi-lock-fill"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {isSignUp ? "SIGN UP" : "SIGN IN"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
