import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome Home! 🎉</h1>
      <p className="text-gray-600 mb-6">
        You’ve successfully logged in or registered.
      </p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}
