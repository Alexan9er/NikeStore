import React, { Component } from 'react';

import $ from 'jquery';
import 'malihu-custom-scrollbar-plugin';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';

import ShoesListItem from '../shoesListItem';
import './shoesList.css';

require('jquery-mousewheel');

class ShoesList extends Component {
  state = {};

  componentDidMount() {
    $('.shoes-list').mCustomScrollbar({
      theme: 'dark-thin',
      axis: 'x',
      autoHideScrollbar: false,
      autoExpandScrollbar: false,
      scrollEasing: 'linear',
      mouseWheel: {
        scrollAmount: '320',
      },
    });
  }

  render() {
    const { shoes } = this.props;

    return (
      <section className="shoes-list">
        <div className="wrapper">
          {shoes.map(shoe => (
            <ShoesListItem key={shoes.id} shoe={shoe} />
          ))}
        </div>
      </section>
    );
  }
}

export default ShoesList;
