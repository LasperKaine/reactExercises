import { useEffect } from 'react';
import { useUserContext } from '../hooks/contextHooks';
import { Link, Outlet } from 'react-router';

const Layout = () => {
  const { user, handleAutoLogin } = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, [handleAutoLogin]);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>

        {!user && <Link to="/login">Login</Link>}

        {user && (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/logout">Logout</Link>
          </>
        )}
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
