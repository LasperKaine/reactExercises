import '../index.css';
import { useUserContext } from '../hooks/useUserContext';

const MediaRow = ({ item, setSelectedItem }) => {
  const { user } = useUserContext();

  const isOwner = user && user.user_id === item.user_id;
  const isAdmin = user && user.user_role === 'admin';
  const isLoggedIn = !!user;
  const canModifyDelete = isLoggedIn && (isOwner || isAdmin);

  const handleModify = () => {
    console.log('modify/delete', item);
  };

  const handleDelete = () => {
    console.log('modify/delete', item);
  };

  return (
    <tr className="bg-gray-800 hover:bg-gray-700 transition-colors">
      <td className="border border-gray-600 p-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-64 h-48 object-cover"
        />
      </td>
      <td className="border border-gray-600 p-4">{item.title}</td>
      <td className="border border-gray-600 p-4">{item.description}</td>
      <td className="border border-gray-600 p-4">
        {new Date(item.created_at).toLocaleString('fi-FI')}
      </td>
      <td className="border border-gray-600 p-4">{item.filesize}</td>
      <td className="border border-gray-600 p-4">{item.media_type}</td>
      <td className="border border-gray-600 p-4 text-center space-x-2">
        <button
          onClick={() => setSelectedItem(item)}
          className="bg-gray-600 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 inline-block"
        >
          View
        </button>
        {canModifyDelete && (
          <>
            <button
              onClick={handleModify}
              className="bg-blue-600 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 inline-block"
            >
              Modify
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-900 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 inline-block"
            >
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default MediaRow;