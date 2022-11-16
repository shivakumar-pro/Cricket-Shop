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
      <h1 id="hero">Add a sporty look to your style with our cricket accessories. Whether you're out on the field or at the kitchen table, they'll lend a dash of fun to your look.</h1>
    </div>
  );
};

export default Home;
