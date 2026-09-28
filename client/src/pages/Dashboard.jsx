function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Navbar */}
      <nav className="border-b border-gray-800 px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          ProjectFlow 🚀
        </h1>

        <button className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700">
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <main className="p-8">

        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Dashboard
          </h2>

          <p className="text-gray-400 mt-2">
            Welcome back! Here's what's happening with your projects.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-gray-400">
              Total Projects
            </p>

            <h3 className="text-3xl font-bold mt-2">
              0
            </h3>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-gray-400">
              Active Tasks
            </p>

            <h3 className="text-3xl font-bold mt-2">
              0
            </h3>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-gray-400">
              Completed Tasks
            </p>

            <h3 className="text-3xl font-bold mt-2">
              0
            </h3>
          </div>

        </div>

        {/* Projects */}
        <div className="bg-gray-800 rounded-xl p-6">

          <div className="flex justify-between items-center mb-6">

            <h3 className="text-xl font-semibold">
              Your Projects
            </h3>

            <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
              + New Project
            </button>

          </div>

          <div className="text-center py-12 text-gray-400">
            <p className="text-lg">
              No projects yet
            </p>

            <p className="text-sm mt-2">
              Create your first project to get started.
            </p>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;