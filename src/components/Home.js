import React from 'react';
import '../styles/home.css';
import heroVideo from '../assets/videos/z.mp4';
import Shop from './Shop';


const Home = () => {

  return (
    <div id="home">
      <video muted autoPlay loop id="hero-video">
        <source src={heroVideo} type="video/mp4" />
      </video>
      <h1>Cricket Shop</h1>
      <div className='hero-search-link'>
      </div>
    </div>
  );
};

export default Home;
