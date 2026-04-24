import { useState, useEffect } from 'react';
import { useLike } from '../hooks/apiHooks'; // Now .jsx
import { useUserContext } from '../hooks/useUserContext';

const Likes = ({ mediaId, showCount = true }) => {
  const { user } = useUserContext();
  const { postLike, deleteLike, getLikeCountByMediaId, getLikeByUser } = useLike();
  const [likeCount, setLikeCount] = useState(0);
  const [userLike, setUserLike] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const count = await getLikeCountByMediaId(mediaId);
        setLikeCount(count);

        if (user) {
          const like = await getLikeByUser(mediaId, user.user_id);
          setUserLike(like);
        }
      } catch (error) {
        console.error('Error fetching likes:', error);
      }
    };

    fetchLikes();
  }, [mediaId, user, getLikeCountByMediaId, getLikeByUser]);

  const handleLikeToggle = async () => {
    if (!user) return;

    setLoading(true);
    try {
      if (userLike) {
        // Unlike
        await deleteLike(userLike.like_id);
        setUserLike(null);
        setLikeCount(prev => prev - 1);
      } else {
        // Like
        const newLike = await postLike(mediaId, user.user_id);
        setUserLike(newLike);
        setLikeCount(prev => prev + 1);
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {user && (
        <button
          onClick={handleLikeToggle}
          disabled={loading}
          className={`py-2 px-4 rounded font-semibold transition-colors duration-200 ${
            userLike
              ? 'bg-red-600 hover:bg-red-900 text-white'
              : 'bg-gray-600 hover:bg-gray-900 text-white'
          } disabled:opacity-50`}
        >
          {userLike ? '❤️' : '🤍'} {userLike ? 'Unlike' : 'Like'}
        </button>
      )}
      {showCount && (
        <span className="text-white font-semibold">{likeCount} likes</span>
      )}
    </div>
  );
};

export default Likes;