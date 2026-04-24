import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';


export const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs),
    };

    return await fetchData(
      `${import.meta.env.VITE_AUTH_API}/auth/login`,
      options
    );
  };

  const postUser = async (inputs) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs),
    };

    return await fetchData(
      `${import.meta.env.VITE_AUTH_API}/users`,
      options
    );
  };

  return { postLogin, postUser };
};

export const useUser = () => {
  const getUserByToken = async (token) => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return await fetchData(
      `${import.meta.env.VITE_AUTH_API}/users/token`,
      options
    );
  };

  return { getUserByToken };
};

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const media = await fetchData(
          `${import.meta.env.VITE_MEDIA_API}/media`
        );

        const enriched = await Promise.all(
          media.map(async (item) => {
            const user = await fetchData(
              `${import.meta.env.VITE_AUTH_API}/users/${item.user_id}`
            );

            return {
              ...item,
              username: user.username,
            };
          })
        );

        setMediaArray(enriched);
      } catch (error) {
        console.error(error);
      }
    };

    getMedia();
  }, []);

  return { mediaArray };
};

export { useMedia };
