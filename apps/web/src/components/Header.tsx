import { Link } from "react-router";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 text-black mx-auto w-full max-w-5xl">
      <Link to="/">
        <h1 className="text-2xl font-bold">{APP_NAME}</h1>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
