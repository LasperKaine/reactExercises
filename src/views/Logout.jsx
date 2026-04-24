import { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }, []);

  return <h2>Logging out...</h2>;
};

export default Logout;
