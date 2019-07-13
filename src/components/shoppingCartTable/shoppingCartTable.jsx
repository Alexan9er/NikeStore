import React from 'react';

import './shoppingCartTable.css';

const ShoppingCartTable = () => (
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
          <tr>
            <td>1</td>
            <td className="cart-table__title">Nike Air VaporMax</td>
            <td>
              <img
                className="cart-table__img"
                src="https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/wxe4gb7zjiey9eejirq0/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg"
                alt="Nike"
              />
            </td>

            <td>
              <button type="submit" className="table-btn btn">
                +
              </button>
              <span>2</span>
              <button type="submit" className="table-btn btn">
                -
              </button>
            </td>
            <td className="cart-table__price">$398</td>
            <td>
              <button type="submit" className="table-btn btn">
                del
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td className="cart-table__title">Nike Air VaporMax</td>
            <td>
              <img
                className="cart-table__img"
                src="https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/wxe4gb7zjiey9eejirq0/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg"
                alt="Nike"
              />
            </td>

            <td>
              <button type="submit" className="table-btn btn">
                +
              </button>
              <span>2</span>
              <button type="submit" className="table-btn btn">
                -
              </button>
            </td>
            <td className="cart-table__price">$398</td>
            <td>
              <button type="submit" className="table-btn btn">
                del
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td className="cart-table__title">Nike Air VaporMax</td>
            <td>
              <img
                className="cart-table__img"
                src="https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/wxe4gb7zjiey9eejirq0/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg"
                alt="Nike"
              />
            </td>

            <td>
              <button type="submit" className="table-btn btn">
                +
              </button>
              <span>2</span>
              <button type="submit" className="table-btn btn">
                -
              </button>
            </td>
            <td className="cart-table__price">$398</td>
            <td>
              <button type="submit" className="table-btn btn">
                del
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td className="cart-table__title">Nike Air VaporMax</td>
            <td>
              <img
                className="cart-table__img"
                src="https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/wxe4gb7zjiey9eejirq0/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg"
                alt="Nike"
              />
            </td>

            <td>
              <button type="submit" className="table-btn btn">
                +
              </button>
              <span>2</span>
              <button type="submit" className="table-btn btn">
                -
              </button>
            </td>
            <td className="cart-table__price">$398</td>
            <td>
              <button type="submit" className="table-btn btn">
                del
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="total">
      Total: <span>$398</span>
    </div>
  </React.Fragment>
);

export default ShoppingCartTable;
