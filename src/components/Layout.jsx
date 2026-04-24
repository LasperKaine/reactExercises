import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <nav className="bg-gray-700">
        <ul className="flex justify-end list-none m-0 p-0">
          <li className="m-0 p-0">
            <Link
              to="/"
              className="block text-white text-center p-4 no-underline hover:bg-gray-900 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li className="m-0 p-0">
            <Link
              to="/profile"
              className="block text-white text-center p-4 no-underline hover:bg-gray-900 transition-colors duration-200"
            >
              Profile
            </Link>
          </li>
          <li className="m-0 p-0">
            <Link
              to="/upload"
              className="block text-white text-center p-4 no-underline hover:bg-gray-900 transition-colors duration-200"
            >
              Upload
            </Link>
          </li>
        </ul>
      </nav>

      <main className="max-w-5xl mx-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;