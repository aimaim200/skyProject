import React from 'react';
import { shallow, mount } from 'enzyme';
import expect, { spyOn } from 'expect';
import Products from '../components/Products';


let wrapper;
const products = [{
  product: 'Sky News',
  locationId: '1111',
},
{
  product: 'Sky Sports News',
  locationId: '1111',
}];
const mockFunction = {
  handleInputChange: (index, categoryIndex) => {},
};
describe('<Products/>', () => {
  beforeEach(() => {
    wrapper = mount(<Products products={products} handleInputChange={mockFunction.handleInputChange} categoryIndex={1} />);
  });
  it('should render the product component', () => {
    expect(wrapper.find('.checkbox').length).toBeGreaterThan(1);
  });
  it('should have products in state on mount', () => {
    expect(wrapper.state().products.length).toEqual(2);
  });
  it('should call the handleInputChange on Checkbox Click', () => {
    const spy = expect.spyOn(mockFunction, 'handleInputChange');
    wrapper = mount(<Products products={products} handleInputChange={mockFunction.handleInputChange} categoryIndex={1} />);
    const checkBox = wrapper.find('.checkbox').at(1);
    checkBox.simulate('change');
    expect(spy).toHaveBeenCalled();
  });
  it('should call the handleInputChange with correct args on Checkbox Click', () => {
    const spy = expect.spyOn(mockFunction, 'handleInputChange');
    wrapper = mount(<Products products={products} handleInputChange={mockFunction.handleInputChange} categoryIndex={1} />);
    const checkBox = wrapper.find('.checkbox').at(1);
    checkBox.simulate('change');
    expect(spy).toHaveBeenCalledWith(1, 1);
  });
});
