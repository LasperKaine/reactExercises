const SingleView = ({ item, setSelectedItem }) => {
  if (!item) return null;

  const isImage = item.media_type.startsWith('image');
  const isVideo = item.media_type.startsWith('video');

  return (
    <dialog open>
      <h2>{item.title}</h2>

      {isImage && (
        <img src={item.filename} alt={item.title} width="100%" />
      )}

      {isVideo && (
        <video src={item.filename} controls width="100%" />
      )}

      <p>{item.description}</p>
      <p>{new Date(item.created_at).toLocaleString('fi-FI')}</p>

      <button onClick={() => setSelectedItem(null)}>
        Close
      </button>
    </dialog>
  );
};


export default SingleView;
