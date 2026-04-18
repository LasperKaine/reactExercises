import { useLocation, useNavigate } from 'react-router-dom';

const Single = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const item = state?.item;

  if (!item) return <p>No media selected</p>;

  return (
    <div>
      <h2>{item.title}</h2>

      <p>{item.description}</p>
      <p>Uploaded by: {item.username}</p>

      {item.media_type.startsWith('image') && (
        <img src={item.filename} alt={item.title} width="100%" />
      )}

      {item.media_type.startsWith('video') && (
        <video src={item.filename} controls width="100%" />
      )}

      <button onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
};

export default Single;
