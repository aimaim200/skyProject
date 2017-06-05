import React from 'react';
import { shallow, mount } from 'enzyme';
import expect, { spyOn } from 'expect';
import Confirmation from '../components/Confirmation';


let wrapper;
const addedProducts = ['Sky News', 'Sky Sports News'];
const mockFunction = {
  onChangeRoute: () => { },
};
describe('<Confirmation/>', () => {
  beforeEach(() => {
    wrapper = mount(<Confirmation addedProducts={addedProducts} onChangeRoute={mockFunction.onChangeRoute} customerId={12345} />);
  });
  it('should render the Confirmation component', () => {
    expect(wrapper.find('.product-group').length).toEqual(1);
  });
  it('should show a list of added items', () => {
    expect(wrapper.find('li').at(1).html()).toInclude('Sky Sports News');
  });
  it('should not show a list of added items', () => {
    wrapper = mount(<Confirmation addedProducts={[]} />);
    expect(wrapper.find('.cart-items').html()).toNotInclude('li');
  });
  it('should call onChangeRoute on Goto Products Click', () => {
    const spy = expect.spyOn(mockFunction, 'onChangeRoute');
    wrapper = mount(<Confirmation addedProducts={addedProducts} onChangeRoute={mockFunction.onChangeRoute} />);
    const gotoBtn = wrapper.find('.btn').at(0);
    gotoBtn.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
  it('should call the onChangeRoute with false on goto Products Click', () => {
    const spy = expect.spyOn(mockFunction, 'onChangeRoute');
    wrapper = mount(<Confirmation addedProducts={addedProducts} onChangeRoute={mockFunction.onChangeRoute} />);
    const gotoBtn = wrapper.find('.btn').at(0);
    gotoBtn.simulate('click');
    expect(spy).toHaveBeenCalledWith(false);
  });
});
