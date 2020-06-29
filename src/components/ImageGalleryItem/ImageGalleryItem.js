import React from 'react';
import './ImageGalleryItem.scss';

const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
  );
};

export default ImageGalleryItem;
