import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.scss';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <li key={image.id} className="ImageGalleryItem">
          <ImageGalleryItem
            onClick={onClick}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            tags={image.tags}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
