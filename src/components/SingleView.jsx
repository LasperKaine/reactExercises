import Likes from './Likes';

const SingleView = ({ item, setSelectedItem }) => {
  if (!item) return null;

  const isImage = item.media_type.startsWith('image');
  const isVideo = item.media_type.startsWith('video');

  return (
    <dialog
      open
      className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-gray-800 border-none rounded-lg p-6 max-w-2xl shadow-2xl backdrop:bg-black backdrop:bg-opacity-75 z-50"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">{item.title}</h2>

        <div className="w-full mb-4">
          {isImage && (
            <img src={item.filename} alt={item.title} className="w-full h-auto" />
          )}

          {isVideo && (
            <video src={item.filename} controls className="w-full h-auto" />
          )}
        </div>

        <p className="mb-2 text-gray-300">{item.description}</p>
        <p className="mb-4 text-sm text-gray-400">
          {new Date(item.created_at).toLocaleString('fi-FI')}
        </p>

        <div className="mb-4 w-full flex justify-center">
          <Likes mediaId={item.media_id} showCount={true} />
        </div>

        <button
          onClick={() => setSelectedItem(null)}
          className="bg-gray-600 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </dialog>
  );
};

export default SingleView;