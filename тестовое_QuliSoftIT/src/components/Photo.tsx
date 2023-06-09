/* eslint-disable max-len */
/* eslint-disable no-console */
// Photo.js
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

export const Photo = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState<any>(null);

  const navigate = useNavigate();

  // Ваш код та обробники подій

  const handleClick = () => {
    // Виклик navigate для переходу на іншу сторінку
    navigate('/');
  };

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/photos/${id}`, {
          params: {
            client_id: '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043',
          },
        });

        setPhoto(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPhoto();
  }, [id]);

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Photo</h1>
      <img src={photo.urls.regular} alt={photo.alt_description} />
      <p>{photo.user.name}</p>
      <button
        type="button"
        onClick={handleClick}
      >
        Back Home
      </button>
    </div>
  );
};
