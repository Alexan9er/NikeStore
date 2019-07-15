import React from 'react';
import { connect } from 'react-redux';

import {
  shoeAddedToCart,
  shoeRemoveFromCart,
  allShoesRemoveFromCart,
} from '../../actions';

import './shoppingCartTable.css';

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => (
  <React.Fragment>
    <div className="shopping-cart-table">
      <h3 className="shopping-cart-title">Your orders</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="cart-table-body">
          {items.map((item, idx) => {
            const { id, title, img, price, count } = item;

            return (
              <tr key={id}>
                <td>{idx}</td>
                <td className="cart-table__title">{title}</td>
                <td>
                  <img className="cart-table__img" src={img} alt={title} />
                </td>

                <td>
                  <button
                    type="submit"
                    className="table-btn btn"
                    onClick={() => onIncrease(id)}
                  >
                    +
                  </button>
                  <span>{count}</span>
                  <button
                    type="submit"
                    className="table-btn btn"
                    onClick={() => onDecrease(id)}
                  >
                    -
                  </button>
                </td>
                <td className="cart-table__price">{price}</td>
                <td>
                  <button
                    type="submit"
                    className="table-btn btn trash-btn"
                    onClick={() => onDelete(id)}
                  >
                    <img
                      src="https://image.flaticon.com/icons/png/512/61/61848.png"
                      alt="trash"
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    <div className="total">
      Total: <span>${total}</span>
    </div>
  </React.Fragment>
);

const mapStateToProps = ({ shoppingCart: { cartItems, cartTotal } }) => ({
  items: cartItems,
  total: cartTotal,
});

const mapDispatchToProps = dispatch => ({
  onIncrease: id => dispatch(shoeAddedToCart(id)),
  onDecrease: id => dispatch(shoeRemoveFromCart(id)),
  onDelete: id => dispatch(allShoesRemoveFromCart(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartTable);
