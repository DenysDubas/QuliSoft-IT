/* eslint-disable max-len */
/* eslint-disable no-console */
// Gallery.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Gallery = () => {
  const [photos, setPhotos] = useState<any>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos', {
          params: {
            client_id: '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043',
          },
        });

        setPhotos(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      {photos.map((photo: any) => (
        <div key={photo.id}>
          <Link to={`/photos/${photo.id}`}>
            <img src={photo.urls.thumb} alt={photo.alt_description} />
            <p>{photo.user.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
