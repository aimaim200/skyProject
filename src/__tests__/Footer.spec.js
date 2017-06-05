import React from 'react';
import { shallow, mount } from 'enzyme';
import expect, { spyOn } from 'expect';
import Footer from '../components/Footer';


let wrapper;

describe('<Footer/>', () => {
  beforeEach(() => {
    wrapper = mount(<Footer />);
  });
  it('should render the Footer component', () => {
    expect(wrapper.find('.footer').length).toEqual(1);
  });
  it('should show footer content', () => {
    expect(wrapper.find('span').html()).toInclude('Kennedy');
  });
});
