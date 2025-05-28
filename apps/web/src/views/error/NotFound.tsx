import { Link } from "react-router"

export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 flex-col gap-5">
      <h1 className="text-4xl font-bold text-gray-800">404 - Not Found</h1>
      <Link to={"/"}>
        <button className="btn btn-primary mt-4">
          Go Back
        </button>
      </Link>
    </div>
  );
}