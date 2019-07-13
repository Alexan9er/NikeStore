import React from 'react';

import ShoesListItem from '../shoesListItem';
import './shoesList.css';

const ShoesList = ({ shoes }) => (
  <section className="shoes-list">
    <div className="wrapper">
      {shoes.map(shoe => (
        <ShoesListItem key={shoe.id} shoe={shoe} />
      ))}
    </div>
  </section>
);

export default ShoesList;
