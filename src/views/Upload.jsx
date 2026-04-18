import { useState } from 'react';
import { useNavigate } from 'react-router';
import useForm from '../hooks/formHooks';
import { useMedia, useFile } from '../hooks/api-hooks';

const Upload = () => {
  const navigate = useNavigate();

  const { postMedia } = useMedia();
  const { postFile } = useFile();

  const [file, setFile] = useState(null);

  const initValues = {
    title: '',
    description: '',
  };

  const doUpload = async (inputs) => {
    try {
      const token = localStorage.getItem('token');

      if (!file || !token) throw new Error('Missing file or token');

      const fileResult = await postFile(file, token);

      await postMedia(
        {
          title: inputs.title,
          description: inputs.description,
          filename: fileResult.filename,
        },
        token
      );

      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doUpload,
    initValues
  );

  const handleFileChange = (e) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
      <h1>Upload</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={inputs.title}
          onChange={handleInputChange}
          placeholder="title"
        />

        <textarea
          name="description"
          value={inputs.description}
          onChange={handleInputChange}
          placeholder="description"
        />

        <input type="file" onChange={handleFileChange} />

        <img
          src={file ? URL.createObjectURL(file) : 'https://placehold.co/200'}
          width="200"
          alt="preview"
        />

        <button disabled={!file || inputs.title.length < 3}>
          Upload
        </button>
      </form>
    </>
  );
};

export default Upload;
