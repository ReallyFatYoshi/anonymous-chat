export default function Unautherized() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 flex-col gap-5">
      <h1 className="text-4xl font-bold text-gray-800">401 - Unauthorized</h1>
      <p className="text-gray-600">
        You do not have permission to access this page.
      </p>
      <a href="/">
        <button className="btn btn-primary mt-4">Go Back</button>
      </a>
    </div>
  );
}
