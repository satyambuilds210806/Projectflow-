import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          ProjectFlow 🚀
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Manage projects. Track tasks. Collaborate with your team.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            to="/login"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;