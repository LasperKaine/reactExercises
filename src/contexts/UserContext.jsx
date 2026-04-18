import { createContext, useState } from 'react';
import { useAuthentication, useUser } from '../hooks/api-hooks';
import { useNavigate } from 'react-router';

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const { postLogin } = useAuthentication();
  const { getUserByToken } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      const loginResult = await postLogin(credentials);

      localStorage.setItem('token', loginResult.token);

      const userResult = await getUserByToken(loginResult.token);

      setUser(userResult.user || userResult);

      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      setUser(null);
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleAutoLogin = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) return;

      const userResult = await getUserByToken(token);

      setUser(userResult.user || userResult);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        handleLogin,
        handleLogout,
        handleAutoLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
