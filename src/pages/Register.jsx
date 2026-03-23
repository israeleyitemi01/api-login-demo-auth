import { useState } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    role: "",
    dateOfBirth: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!validateForm()) return;

    try {
      setLoading(true);

      const res = await axios.post("/auth/register", formData);

      setSuccess(res.data.message || "Registration successful");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        role: "",
        dateOfBirth: "",
        phone: "",
        address: "",
      });
      // navigate the user to login page
      setTimeout(()=>{
      navigate("/login");

      }, 3000)
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-slate-900 pt-10 min-h-screen pb-10">
      <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 shadow-lg w-[45%] mx-auto rounded-lg pb-5">
      <h2 className="flex justify-center font-semibold text-3xl p-8 text-white">Create account</h2>
      <form className="flex flex-col gap-3 pl-10"
       onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key}>
            {/* <label>{key}</label> */}

            {/* Dynamic Input Types */}
            {key === "gender" || key === "role" ? (
              <select
              className={`w-[92%] bg-slate-900 border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none rounded-sm p-2 mr-10 ${
                formData[key] ? "text-white" : "text-slate-400"
              }`}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required
              >
                <option
                 value="">Select {key}</option>
                {key === "gender" && (
                  <>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </>
                )}
                {key === "role" && (
                  <>
                    <option value="patient">Patient</option>
                    <option value="health_worker">Health Worker</option>
                  </>
                )}
              </select>
            ) : (
              <input
              className={`w-[92%] bg-slate-900 border border-slate-700 rounded-sm p-2 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none [color-scheme:dark] ${
                key === "dateOfBirth" && !formData[key] ? "text-slate-400" : "text-white"
              }`}
                type={
                  key === "email"
                    ? "email"
                    : key === "phone"
                      ? "tel"
                      : key === "dateOfBirth"
                        ? "date"
                        : key.includes("password")
                          ? "password"
                          : "text"
                }
                name={key}
                value={formData[key]}
                onChange={handleChange}
                placeholder={key}
                required
              />
            )}
          </div>
        ))}

        <button 
        className="w-[92%] bg-indigo-600 cursor-pointer transition hover:bg-indigo-500 text-white font-semibold  rounded-[50px] p-2 mb-6 mt-2"  type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      {/* Error Message */}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {/* Success Message */}
      {success && <p style={{ color: "green", textAlign: "center"}}>{success}</p>}
    </div>
    </div>
  );
}
