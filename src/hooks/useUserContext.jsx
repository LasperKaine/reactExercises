import { createContext, useContext } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  // For now, user is null. You can add actual user state later
  const user = null;

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};