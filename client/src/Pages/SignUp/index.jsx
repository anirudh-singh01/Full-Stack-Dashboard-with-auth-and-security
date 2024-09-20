import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
    setLoading(false); // Set loading to false after the request completes
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <video className={styles.videoBackground} autoPlay muted loop>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div className={styles.overlay}>
            <h1>Welcome Back</h1>
            <Link to="/login">
              <button type="button" className={styles.white_btn}>
                Sign in
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1 style={{ color: "black" }}>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <div className={styles.password_container}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              <button
                type="button"
                onClick={togglePassword}
                className={styles.toggle_password_btn}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {error && <div className={styles.error_msg}>{error}</div>}
            {/* Show loading text or spinner */}
            {loading && <div className={styles.loading}>Loading...</div>}
            <button type="submit" className={styles.green_btn} disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
