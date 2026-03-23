import React, { useState } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";


function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //   form validation

  const validateForm = () => {
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!validateForm()) return;

    try {
      setLoading(true);

      const res = await axios.post("/auth/login", formData);

    //   store token and user details to localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setSuccess(`${res.data.message}. Redirecting to dashboard...`|| "Login successful. Redirecting to dashboard...");

      // Reset form
      setFormData({
        email: "",
        password: "",
      });
      // navigate the user to login page
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center bg-slate-900 min-h-screen ">
      <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 shadow-lg w-[40%] mx-auto rounded-lg pb-5">
        <h1 className="text-center pt-8 text-3xl font-bold text-white">Login to your account</h1>
      <form className="flex flex-col gap-5 pl-10 pt-10"
       onSubmit={handleSubmit}>
        <input
          className="w-[92%] bg-slate-900 border border-slate-700 rounded-sm p-2 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          className="w-[92%] bg-slate-900 border border-slate-700 rounded-sm p-2 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
          name="password"
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={formData.password}
        />
        <button
        className="w-[92%] bg-indigo-600 cursor-pointer transition hover:bg-indigo-500 text-white font-semibold  rounded-[50px] p-2 mb-6 mt-2" type="submit" disabled={loading}>
          {loading ? "Loging in..." : "Login"}
        </button>
        {/* Error Message */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Success Message */}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </form>
      </div>
    </div>
  );
}

export default Login;
