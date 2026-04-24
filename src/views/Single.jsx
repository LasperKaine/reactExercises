import { useLocation, useNavigate } from 'react-router-dom';

const Single = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const item = state?.item;

  if (!item) return <p>No item selected</p>;

  return (
    <div>
      <h2>{item.title}</h2>

      {item.media_type.startsWith('image') && (
        <img src={item.filename} alt={item.title} />
      )}

      {item.media_type.startsWith('video') && (
        <video src={item.filename} controls />
      )}

      <p>{item.description}</p>

      <button onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
};

export default Single;
