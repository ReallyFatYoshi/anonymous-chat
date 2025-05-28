import { Link } from "react-router";
import Footer from "../components/Footer";

export default function App() {
  return (
    <>
      <main className="xl:px-0 mx-auto w-full max-w-5xl h-screen ">
        <section className="flex h-screen w-full items-center justify-center flex-col gap-8 px-4">
          <div className="w-full max-w-2xl text-center">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">
              Welcome to{" "}
              <span className="text-indigo-600">Anonymous Chat</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-700 mb-8">
              Chat with anyone, anywhere, anytime.
              <br className="hidden sm:inline" />
              Your privacy is our priority—no data shared, no identity revealed.
            </p>
            <Link
              to="/register"
              className="inline-block px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold text-lg shadow-md hover:bg-indigo-700 transition"
            >
              Register Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
