import './SeasonDisplay.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import useLocation from './useLocation';
const App = () => {
  const [Latitude, errorMSG] = useLocation();
  let content;
  if (errorMSG) {
    content = <div> Error: {errorMSG} </div>;
  } else if (Latitude) {
    content = <SeasonDisplay Latitude={Latitude} />;
  } else {
    content = <Loader message='Please accept location request' />;
  }
  return <div className='border red'> {content} </div>;
};

ReactDOM.render(
  React.createElement(App, null),
  document.querySelector('#root')
);
