import React, { Component } from 'react';
import { connect } from 'react-redux';

import $ from 'jquery';
import 'malihu-custom-scrollbar-plugin';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';

import { WithShoesService } from '../../helpers/hocHelpers';

import ShoesListItem from '../shoesListItem';
import './shoesList.css';

import Spinner from '../../shared/components/spinner';

import { shoesLoaded, shoesRequested } from '../../actions';

require('jquery-mousewheel');

class ShoesList extends Component {
  state = {};

  componentDidMount() {
    const { shoesService, shoesLoaded, shoesRequested } = this.props;

    shoesRequested();

    shoesService.getShoes().then((data) => {
      shoesLoaded(data);
    });
  }

  componentDidUpdate() {
    this.horScroll();
  }

  horScroll = () => {
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
  };

  render() {
    const { shoes, isLoading } = this.props;

    if (isLoading) {
      return <Spinner />;
    }

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
  isLoading: state.isLoading,
});

const mapDispatchToProps = { shoesLoaded, shoesRequested };

export default WithShoesService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShoesList)
);
