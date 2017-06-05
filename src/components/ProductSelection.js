import React, { Component } from 'react';
import { catalogService, customerLocationService } from '../server';
import '../styles/ProductSelection.css';
import Products from './Products';
import Checkout from './Checkout';
import { getCookie } from './helper';
import news from '../img/news.png';
import sports from '../img/sports.png';


class ProductSelection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      catalog: [],
      addedItems: [],
    };
  }

  componentWillMount() {
    const customerId = getCookie('customerId') || '12345';
    const locationId = this.getLocationId(customerId);
    this.getCatalog(locationId);
  }

  getLocationId(customerId) {
    return customerLocationService(customerId);
  }

  getCatalog(locationId) {
    this.setState({
      catalog: catalogService(locationId),
    });
  }

  handleInputChange(index, categoryIndex) {
    const productDetails = this.state.catalog[categoryIndex].products[index];
    this.state.catalog[categoryIndex].products[index].checked = !productDetails.checked;
    const isInCart = this.state.addedItems.indexOf(productDetails.product);
    if (isInCart > -1) {
      this.state.addedItems.splice(isInCart, 1);
    } else {
      this.state.addedItems.push(productDetails.product);
    }
    this.forceUpdate();
  }

  render() {
    return (
      <div className="product-selection">
        {this.state.catalog.map((service, index) => (
          <div className="product-group" key={index}>
            <div className="category-header">
              {service.category == 'sports' ? <img className="icon-logo" alt="sports" src={sports} /> : <img className="icon-logo" alt="news" src={news} />}
              {service.category}
            </div>
            <div className="product-items">
              <Products handleInputChange={this.handleInputChange.bind(this)} products={service.products} categoryIndex={index} />
            </div>
          </div>
        ))}
        <div className="product-group">
          <Checkout addedProducts={this.state.addedItems} onCheckout={this.props.onChangeRoute} />
        </div>
      </div>
    );
  }
}

export default ProductSelection;
