import React from 'react';
import './ImageGalleryItem.scss';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, onClick }) => {
  return (
    <img
      src={webformatURL}
      alt={tags}
      data-source={largeImageURL}
      className="ImageGalleryItem-image"
      onClick={onClick}
    />
  );
};

export default ImageGalleryItem;
