import React from 'react';
import '../styles/checkout.css';
import cart from '../img/cart.png';

const Checkout = ({ addedProducts, onCheckout }) => (
  <div className="checkout">
    <div className="category-header">
      <img className="icon-logo" src={cart} />  Basket <span className="badge" data-badge={addedProducts.length} />
    </div>
    <ul className="cart-items">
      {addedProducts.length === 0 ? 'You Do not Have any Items In your Cart' : addedProducts.map((addedProduct, index) => (
        <li key={index}> {addedProduct} </li>))}
    </ul>
    <button
      className="btn"
      onClick={() => { onCheckout(addedProducts); }}
    >Checkout
    </button>
  </div>
    );

export default Checkout;
