import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';

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
