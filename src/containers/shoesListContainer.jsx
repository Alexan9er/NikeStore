import React, { Component } from 'react';
import { connect } from 'react-redux';

import $ from 'jquery';
import 'malihu-custom-scrollbar-plugin';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';

import { WithShoesService } from '../helpers/hocHelpers';

import Spinner from '../shared/components/spinner';
import ErrorIndicator from '../shared/components/errorIndicator';

import { fetchShoes } from '../actions';
import ShoesList from '../components/shoesList';

require('jquery-mousewheel');

class ShoesListContainer extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchShoes();
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
    const { shoes, isLoading, error } = this.props;

    if (isLoading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <ShoesList shoes={shoes} />;
  }
}
const mapStateToProps = ({ shoes, error, isLoading }) => ({
  shoes,
  isLoading,
  error,
});

const mapDispatchToProps = (dispatch, { shoesService }) => ({
  fetchShoes: fetchShoes(shoesService, dispatch),
});

export default WithShoesService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShoesListContainer)
);
