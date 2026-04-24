import { useState } from 'react';
import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView.jsx';
import '../index.css';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const mediaArray = [
    {
      media_id: 8,
      user_id: 5,
      filename: 'https://place-hold.it/1200x800.jpg&text=Pic1&fontsize=120',
      thumbnail: 'http://place-hold.it/320/240.jpg&text=Thumb2&fontsize=20',
      filesize: 170469,
      media_type: 'image/jpeg',
      title: 'Picture 1',
      description: 'This is a placeholder picture.',
      created_at: '2024-01-07T20:49:34.000Z',
    },
    {
      media_id: 9,
      user_id: 7,
      filename: 'https://place-hold.it/800x600.jpg&text=Pic2&fontsize=72',
      thumbnail: 'http://place-hold.it/320/240.jpg&text=Thumb3&fontsize=20',
      filesize: 1002912,
      media_type: 'image/jpeg',
      title: 'Pic 2',
      description: '',
      created_at: '2024-01-07T21:32:27.000Z',
    },
    {
      media_id: 17,
      user_id: 2,
      filename:
        'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4',
      thumbnail: 'http://place-hold.it/320/240.jpg&text=Thumb1&fontsize=20',
      filesize: 1236616,
      media_type: 'video/mp4',
      title: 'Bunny',
      description: 'Butterflies fly around the bunny.',
      created_at: '2024-01-07T20:48:13.000Z',
    },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">My Media</h2>

      {selectedItem && (
        <SingleView
          item={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      )}

      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-700">
              <th className="border border-gray-600 p-4 text-left">Thumbnail</th>
              <th className="border border-gray-600 p-4 text-left">Title</th>
              <th className="border border-gray-600 p-4 text-left">Description</th>
              <th className="border border-gray-600 p-4 text-left">Created</th>
              <th className="border border-gray-600 p-4 text-left">Size</th>
              <th className="border border-gray-600 p-4 text-left">Type</th>
              <th className="border border-gray-600 p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mediaArray.map((item) => (
              <MediaRow
                key={item.media_id}
                item={item}
                setSelectedItem={setSelectedItem}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;