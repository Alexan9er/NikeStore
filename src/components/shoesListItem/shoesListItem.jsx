import React from 'react';

import './shoesListItem.css';

const ShoesListItem = ({ shoe }) => {
  const { img, title, model, price, tag } = shoe;

  return (
    <div className="card">
      <div className="card__tag">{tag}</div>
      <img className="cart__img" src={img} alt={title} />
      <div className="cart__details">
        <span className="cart__model">{model}</span>
        <h2 className="card__title">{title}</h2>
        <div className="price-and-btn">
          <span className="cart__price">${price}</span>
          <button type="submit" className="btn">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoesListItem;
