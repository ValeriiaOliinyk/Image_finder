import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.scss';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <li key={image.id} className="ImageGalleryItem">
          <ImageGalleryItem
            webformatURL={image.webformatURL}
            tags={image.tags}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
