import React, { Component } from 'react';

class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentWillMount() {
    this.setState({
      products: this.props.products,
    });
  }

  handleInputChange(index) {
    this.state.products[0].checked = !this.state.products[index].checked;
  }

  render() {
    return (
      <div >
        {this.props.products.map((product, index) => (
          <label key={index}>
            <input
              name={product.product}
              className="checkbox"
              type="checkbox"
              checked={product.checked}
              onChange={() => { this.props.handleInputChange(index, this.props.categoryIndex); }}
            />
            {product.product}
          </label>
        ))}
      </div>
    );
  }
}

export default Products;
