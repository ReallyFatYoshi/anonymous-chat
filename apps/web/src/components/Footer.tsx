export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-16 text-black my-5">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
      </p>
      <div className="flex items-center space-x-2 ml-4">
        <a
          href="/privacy"
          className="text-sm text-gray-600 hover:text-gray-800"
        >
          Privacy Policy
        </a>
        <span className="text-gray-400">|</span>
        <a
          href="/contact"
          className="text-sm text-gray-600 hover:text-gray-800"
        >
          Cookie Policy
        </a>
        <span className="text-gray-400">|</span>
        <a href="/terms" className="text-sm text-gray-600 hover:text-gray-800">
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
