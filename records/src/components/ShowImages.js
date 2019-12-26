import React from 'react';

const ShowImages = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });
  return <div>{images}</div>;
};
export default ShowImages;
