import GuestLayout from "../../layouts/guest";

export default function Register() {
  // Register page
  return (
    <GuestLayout>
      <div className="flex h-screen w-full items-center justify-center flex-col gap-8 px-4">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">
            Register
          </h1>
          <p className="text-base sm:text-xl text-gray-700 mb-8">
            Create an account to start chatting.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-300 rounded-lg p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg p-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-lg p-2"
            />
            <button
              type="submit"
              className="inline-block px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold text-lg shadow-md hover:bg-indigo-700 transition"
            >
              Register
            </button>
          </form>
        </div>
        <div className="text-gray-700">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Login here
          </a>
        </div>
      </div>
    </GuestLayout>
  );
}
