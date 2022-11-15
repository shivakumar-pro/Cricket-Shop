import React from 'react';
import Shop from './Shop';
import '../styles/kid.css';
import hero from '../assets/img/hero3.jpg';

const Men = ({ cards, categories, setCategories }) => {
  return (
    <div id="kid">
      <Shop
        cardsArray={cards}
        category="MEN'S"
        hero={hero}
        heroId="shop-hero-man"
        age="men"
        categories={categories}
        setCategories={setCategories}
      />
    </div>
  );
};

export default Men;
