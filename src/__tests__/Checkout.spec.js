import React from 'react';
import { shallow, mount } from 'enzyme';
import expect, { spyOn } from 'expect';
import Checkout from '../components/Checkout';


let wrapper;
const addedProducts = ['Sky News', 'Sky Sports News'];
const mockFunction = {
  onCheckout: () => { },
};
describe('<Checkout/>', () => {
  beforeEach(() => {
    wrapper = mount(<Checkout addedProducts={addedProducts} onCheckout={mockFunction.onCheckout} />);
  });
  it('should render the product component', () => {
    expect(wrapper.find('.checkout').length).toBeGreaterThan(0);
  });
  it('should indicate items in cart on mount with items', () => {
    expect(wrapper.find('.cart-items').html()).toInclude('Sky Sports News');
  });
  it('should indicate no in cart on mount without items', () => {
    wrapper = mount(<Checkout addedProducts={[]} onCheckout={mockFunction.onCheckout} />);
    expect(wrapper.find('.cart-items').html()).toInclude('You Do not Have any Items');
  });
  it('should call the onCheckout on checkout Click', () => {
    const spy = expect.spyOn(mockFunction, 'onCheckout');
    wrapper = mount(<Checkout addedProducts={addedProducts} onCheckout={mockFunction.onCheckout} />);
    const checkoutBtn = wrapper.find('.btn').at(0);
    checkoutBtn.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
  it('should call the onCheckout with array of items on checkout Click', () => {
    const spy = expect.spyOn(mockFunction, 'onCheckout');
    wrapper = mount(<Checkout addedProducts={addedProducts} onCheckout={mockFunction.onCheckout} />);
    const checkoutBtn = wrapper.find('.btn').at(0);
    checkoutBtn.simulate('click');
    expect(spy).toHaveBeenCalledWith(addedProducts);
  });
});
