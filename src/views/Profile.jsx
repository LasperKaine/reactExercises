import { useEffect, useState } from 'react';
import { useUser } from '../hooks/api-hooks';

const Profile = () => {
  const { getUserByToken } = useUser();
  const [user, setUser] = useState(null);

useEffect(() => {
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('token');
      const result = await getUserByToken(token);
      setUser(result);
    } catch (error) {
      console.error(error);
    }
  };

  fetchUser();
}, [getUserByToken]);

  if (!user) return <p>Loading...</p>;

  return (
    <>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </>
  );
};

export default Profile;
