import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", pass: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      const res = await axios.post("http://localhost:3000/api/login", formData);
      localStorage.setItem("token", res.data.token);
      setMsg("✅ Login Successful!");
      setTimeout(() => navigate("/home"), 1000); // navigate to home
    } catch (err) {
      setMsg(err.response?.data?.msg || "❌ Invalid Credentials!");
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="email" name="email" placeholder="Email" onChange={handleChange}
          className="border rounded-lg p-2" required />
        <input type="password" name="pass" placeholder="Password" onChange={handleChange}
          className="border rounded-lg p-2" required />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
      </form>
      {msg && <p className="mt-3 text-center text-sm text-gray-700">{msg}</p>}
      <p className="mt-4 text-sm text-center">
        Don’t have an account?{" "}
        <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/register")}>
          Register
        </span>
      </p>
    </div>
  );
}
