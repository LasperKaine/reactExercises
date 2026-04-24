import { useLocation, useNavigate } from 'react-router-dom';

const Single = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const item = state?.item;

  if (!item)
    return (
      <p className="text-white text-lg">No item selected</p>
    );

  const isImage = item.media_type.startsWith('image');
  const isVideo = item.media_type.startsWith('video');

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-6">{item.title}</h2>

      <div className="w-full max-w-2xl mb-6">
        {isImage && (
          <img
            src={item.filename}
            alt={item.title}
            className="w-full h-auto object-contain"
          />
        )}

        {isVideo && (
          <video
            src={item.filename}
            controls
            className="w-full h-auto"
          />
        )}
      </div>

      <p className="text-gray-300 mb-4 text-center">{item.description}</p>

      <button
        onClick={() => navigate(-1)}
        className="bg-gray-600 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded transition-colors duration-200"
      >
        Go back
      </button>
    </div>
  );
};

export default Single;