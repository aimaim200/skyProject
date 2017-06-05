import React from 'react';

const Confirmation = ({ addedProducts, onChangeRoute, customerId }) => (
  <div className="product-group">
    <h3 className="category-header">Confirmation Page</h3>
    <div>Customer Id: {customerId} </div>
    <ul className="cart-items">
      {addedProducts.map((addedProduct, index) => (
        <li key={index}> {addedProduct} </li>
    ))}
    </ul>
    <button className="confirm-btn btn" onClick={() => { onChangeRoute(false); }}>Goto Products </button>
  </div>
        );

export default Confirmation;
