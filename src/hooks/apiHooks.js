const API_URL = 'http://users.metropolia.fi/~your-username/api';

export const useLike = () => {
  const postLike = async (mediaId, userId) => {
    const response = await fetch(`${API_URL}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ media_id: mediaId, user_id: userId }),
    });
    if (!response.ok) throw new Error('Failed to post like');
    return response.json();
  };

  const deleteLike = async (likeId) => {
    const response = await fetch(`${API_URL}/likes/${likeId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete like');
    return response.json();
  };

  const getLikeCountByMediaId = async (mediaId) => {
    const response = await fetch(`${API_URL}/likes/count/${mediaId}`);
    if (!response.ok) throw new Error('Failed to get like count');
    const data = await response.json();
    return data.count || 0;
  };

  const getLikeByUser = async (mediaId, userId) => {
    const response = await fetch(`${API_URL}/likes/${mediaId}/${userId}`);
    if (!response.ok) return null;
    return response.json();
  };

  return { postLike, deleteLike, getLikeCountByMediaId, getLikeByUser };
};

export const useMedia = () => {
  const deleteMedia = async (mediaId) => {
    const response = await fetch(`${API_URL}/media/${mediaId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete media');
    return response.json();
  };

  const modifyMedia = async (mediaId, data) => {
    const response = await fetch(`${API_URL}/media/${mediaId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to modify media');
    return response.json();
  };

  return { deleteMedia, modifyMedia };
};