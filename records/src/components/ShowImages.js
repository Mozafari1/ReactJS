import './ShowImages.css';
import React from 'react';
import ImageCard from './ImageCard';
const ShowImages = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className='show-images'>{images}</div>;
};
export default ShowImages;
