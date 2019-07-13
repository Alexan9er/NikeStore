import React, { Component } from 'react';
import { connect } from 'react-redux';

import $ from 'jquery';
import 'malihu-custom-scrollbar-plugin';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';

import { WithShoesService } from '../../helpers/hocHelpers';

import ShoesListItem from '../shoesListItem';
import './shoesList.css';

import { shoesLoaded } from '../../actions';

require('jquery-mousewheel');

class ShoesList extends Component {
  state = {};

  componentDidMount() {
    const { shoesService } = this.props;
    const data = shoesService.getShoes();
    this.props.shoesLoaded(data);

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
            <ShoesListItem key={shoe.id} shoe={shoe} />
          ))}
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  shoes: state.shoes,
});

const mapDispatchToProps = { shoesLoaded };

export default WithShoesService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShoesList)
);
