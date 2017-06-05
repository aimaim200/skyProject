import React from 'react';
import { shallow, mount } from 'enzyme';
import ProductSelection from '../components/ProductSelection';
import Products from '../components/Products';
import Checkout from '../components/Checkout';


let wrapper;

describe('<Product Selection/>', () => {
  beforeEach(() => {
    wrapper = shallow(<ProductSelection />);
  });
  it('should render the component', () => {
    expect(wrapper.find('.product-selection').length).toEqual(1);
  });
  it('it should render the Checkout component', () => {
    expect(wrapper.find('Checkout').length).toEqual(1);
  });
  it('it should render the product items', () => {
    expect(wrapper.find('.product-items').length).toEqual(2);
  });
  it('it should mount the Products component', () => {
    wrapper = mount(<ProductSelection />);
    const products = wrapper.find(Products);
    expect(products.length).toBeGreaterThan(0);
  });
  it('it should mount the Checkout component', () => {
    wrapper = mount(<ProductSelection />);
    const checkout = wrapper.find(Checkout);
    expect(checkout.length).toBeGreaterThan(0);
  });
  it('it should have a catalog array in state on mount', () => {
    expect(wrapper.state().catalog.length).toBeGreaterThan(1);
  });
  it('it should have an empty addItems array in state on mount', () => {
    expect(wrapper.state().addedItems.length).toEqual(0);
  });
  it('it should update addItems array on click of an item', () => {
    wrapper = mount(<ProductSelection />);
    const checkArsenal = wrapper.find('.product-items').find('.checkbox').at(1);
    checkArsenal.simulate('change');
    expect(wrapper.state().addedItems.length).toEqual(1);
  });
});
