import React from 'react';
import Shop from './Shop';
import hero from '../assets/img/hero2.jpeg';
import '../styles/kid.css';

const kid = ({ cards, categories, setCategories }) => {
  return (
    <div id="kid">
      <Shop
        cardsArray={cards}
        category="KID'S"
        hero={hero}
        heroId="shop-hero-kid"
        age="kid"
        categories={categories}
        setCategories={setCategories}
      />
    </div>
  );
};

export default kid;
