import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import Products from '../components/Products';
import Checkout from '../components/Checkout';


let wrapper;

describe('<Product Selection/>', () => {
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  it('should render the component', () => {
    expect(wrapper.find('.App').length).toEqual(1);
  });
  it('it should render the ProductSelection component', () => {
    expect(wrapper.find('ProductSelection').length).toEqual(1);
  });
  it('it should render the header with content', () => {
    expect(wrapper.find('h2').html().includes('Welcome'));
  });
  it('it should render the Footer component', () => {
    expect(wrapper.find('Footer').length).toEqual(1);
  });
  it('it should mount the Confirmation component if confirmation is true', () => {
    wrapper.setState({ confirmation: true });
    expect(wrapper.find('Confirmation').length).toEqual(1);
  });
  it('it should unmount the ProductSelection component if confirmation is true', () => {
    wrapper.setState({ product: false });
    expect(wrapper.find('ProductSelection').length).toEqual(0);
  });
});
